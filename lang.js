import { tool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import dotenv from "dotenv";
dotenv.config();

const OPEN_AI_KEY = process.env?.OPEN_AI_KEY || "";

import z from "zod";
import { ToolMessage } from "@langchain/core/messages";

const llm = new ChatOpenAI({
  apiKey: OPEN_AI_KEY,
  model: "gpt-4o-mini",
});

const multiply = tool(
  async ({ a, b }) => {
    return a * b;
  },
  {
    name: "multiply",
    description: "Multiply two numbers",
    schema: z.object({
      a: z.number().describe("first number"),
      b: z.number().describe("second number"),
    }),
  }
);

const add = tool(
  async ({ a, b }) => {
    return a + b;
  },
  {
    name: "add",
    description: " Add two numbers",
    schema: z.object({
      a: z.number().describe("first number"),
      b: z.number().describe("second number"),
    }),
  }
);

const tools = [multiply, add];
const toolByName = Object.fromEntries(tools.map((tool) => [tool.name, tool]));

const llmWithTools = llm.bindTools(tools);

async function llmCall(state) {
  console.info("\n\n------------------------[msg] state >>>>>", state.messages);
  const normalizedMessages = state.messages
    .map((msg) => ({
      role: msg?.ToolMessage ? "developer" : "assistant",
      content: msg?.ToolMessage?.content || "",
    }))
    .filter((item) => item.role && item.content);
  const result = await llmWithTools.invoke([
    {
      role: "system",
      content: "You are useful assistant  performing arithmetic operation",
    },
    ...normalizedMessages,
  ]);
  console.info("[msg] >>>>>", result);
  return {
    messages: [result],
  };
}

async function toolNode(state) {
  const results = [];
  console.info("\n\n[msg] >>>> entering tool node ");
  const lastMessage = state.messages?.at(-1);
  if (lastMessage?.tool_calls?.length) {
    for (const toolCall of lastMessage.tool_calls) {
      const tool = toolByName[toolCall.name];
      const observation = await tool.invoke(toolCall.args);
      results.push(
        new ToolMessage({
          content: observation,
          tool_call_id: toolCall.id,
        })
      );
    }
  }
  console.info("[msg] >>>>> results \n", results);
  return {
    messages: results,
  };
}

const shouldContinue = (state) => {
  const message = state.messages;
  const lastMessage = message.at(-1);

  if (lastMessage?.tool_calls?.length) {
    return "action";
  }
  return "__end__";
};

const agentBuilder = new StateGraph(MessagesAnnotation)
  .addNode("llmCall", llmCall)
  .addNode("tools", toolNode)
  .addEdge("__start__", "llmCall")
  .addConditionalEdges("llmCall", shouldContinue, {
    action: "tools",
    __end__: "__end__",
  })
  .addEdge("tools", "llmCall")
  .compile();

const messages = {
  role: "user",
  content: "add 3 and 4",
};

const main = async () => {
  const result = await agentBuilder.invoke({ messages });
  console.log(result.messages);
};

main().catch((error) => {
  console.info(error);
});
