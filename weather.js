import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";
import readlineSync from "readline-sync";

const OPEN_AI_KEY = process.env?.OPEN_AI_KEY || "";

console.info("[msg] >>>>> ", OPEN_AI_KEY);
const client = new OpenAI({
  apiKey: OPEN_AI_KEY,
});

const getWeatherDetails = (city) => {
  switch (city.toLowerCase()) {
    case "delhi":
      return "25 degree Celsius";
    case "bangalore":
      return "23 degree Celsius";
  }
};

const TOOLS = {
  getWeatherDetails: getWeatherDetails,
};

const SYSTEM_PROMPT = `
You are an AI Assistant with START, PLAN, ACTION, OBSERVATION and OUTPUT states
wait for the user prompt, first PLAN using available tools.
After Planning, take appropriate action with tool and wait for observation based on action
once you get observation, return AI response based on START prompt and OBSERVATION

Strictly follow json output format as in Example 

Available Tools:
 - function getWeatherDetails(city: string): string
   getWeatherDetails is a function that takes city as a string input and returns weather details as string.


Example: 
START 
{"type":"user", "user": "what is sum of weather of Delhi and Lucknow"}
{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi"}
{"type":"action", "function": "getWeatherDetails", "input":"delhi"}
{"type":"observation", "observation": "15 degree Celsius}
{"type":"plan", "plan": "I will call the getWeatherDetails for Lucknow"}
{"type":"action", "function": "getWeatherDetails","input":"Lucknow"}
{"type":"observation", "observation": "10 Degree Celsius"}
{"type":"output", "output": "The sum of weather of Delhi and Lucknow is 25 Degree Celsius"}

`;

const messages = [{ role: "system", content: SYSTEM_PROMPT }];

while (true) {
  const query = readlineSync.question(">> ");
  const userQuery = {
    type: "user",
    user: query,
  };
  messages.push({ role: "user", content: query });

  while (true) {
    const chat = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      response_format: { type: "json_object" },
    });

    const result = chat.choices[0].message.content;
    messages.push({ role: "assistant", content: result });

    console.log(`\n\n\n[msg] ----------- AI BEGIN ------------`);
    console.log(result);
    console.log(messages);
    console.log(`[msg] ----------- AI  END  ------------`);
    const call = JSON.parse(result);
    if (call.type === "action") {
      const fn = TOOLS[call.function];
      const observation = fn(call.input);
      const obs = { type: "observation", observation: observation };
      messages.push({ role: "developer", content: JSON.stringify(obs) });
    } else if (call.type === "output") {
      console.log(`😀 > ${call.output} `);
      break;
    }
  }
}
// const chat = async () => {
//   const result = await client.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       { role: "system", content: SYSTEM_PROMPT },
//       {
//         role: "developer",
//         content:
//           '{"type":"plan", "plan": "I will call the getWeatherDetails for Bangalore"}',
//       },
//       {
//         role: "developer",
//         content:
//           '{"type":"action", "function":"getWeatherDetails","input":"Bangalore"}',
//       },
//       {
//         role: "developer",
//         content: '{"type":"observation","observation":"22 degree Celsius"}',
//       },
//       { role: "user", content: user },
//     ],
//   });
//   //   console.log(result);
//   console.log("[msg] >>>>", result.choices[0].message.content);
// };

// chat().then();
