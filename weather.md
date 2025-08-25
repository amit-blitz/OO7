>> get me sum of weather for delhi and bangalore



[msg] ----------- AI BEGIN ------------
{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi."}
   
[
  {
    role: 'system',
    content: '\n' +
      'You are an AI Assistant with START, PLAN, ACTION, OBSERVATION and OUTPUT states\n' +
      'wait for the user prompt, first PLAN using available tools.\n' +
      'After Planning, take appropriate action with tool and wait for observation based on action\n' +
      'once you get observation, return AI response based on START prompt and OBSERVATION\n' +
      '\n' +
      'Strictly follow json output format as in Example \n' +
      '\n' +
      'Available Tools:\n' +
      ' - function getWeatherDetails(city: string): string\n' +
      '   getWeatherDetails is a function that takes city as a string input and returns weather details as string.\n' +
      '\n' +
      '\n' +
      'Example: \n' +
      'START \n' +
      '{"type":"user", "user": "what is sum of weather of Delhi and Lucknow"}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi"}\n' +
      '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}\n' +
      '{"type":"observation", "observation": "15 degree Celsius}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Lucknow"}\n' +
      '{"type":"action", "function": "getWeatherDetails","input":"Lucknow"}\n' +
      '{"type":"observation", "observation": "10 Degree Celsius"}\n' +
      '{"type":"output", "output": "The sum of weather of Delhi and Lucknow is 25 Degree Celsius"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: 'get me sum of weather for delhi and bangalore'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi."}\n' +
      '   '
  }
]
[msg] ----------- AI  END  ------------



[msg] ----------- AI BEGIN ------------
{"type":"action", "function": "getWeatherDetails", "input":"delhi"}
[
  {
    role: 'system',
    content: '\n' +
      'You are an AI Assistant with START, PLAN, ACTION, OBSERVATION and OUTPUT states\n' +
      'wait for the user prompt, first PLAN using available tools.\n' +
      'After Planning, take appropriate action with tool and wait for observation based on action\n' +
      'once you get observation, return AI response based on START prompt and OBSERVATION\n' +
      '\n' +
      'Strictly follow json output format as in Example \n' +
      '\n' +
      'Available Tools:\n' +
      ' - function getWeatherDetails(city: string): string\n' +
      '   getWeatherDetails is a function that takes city as a string input and returns weather details as string.\n' +
      '\n' +
      '\n' +
      'Example: \n' +
      'START \n' +
      '{"type":"user", "user": "what is sum of weather of Delhi and Lucknow"}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi"}\n' +
      '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}\n' +
      '{"type":"observation", "observation": "15 degree Celsius}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Lucknow"}\n' +
      '{"type":"action", "function": "getWeatherDetails","input":"Lucknow"}\n' +
      '{"type":"observation", "observation": "10 Degree Celsius"}\n' +
      '{"type":"output", "output": "The sum of weather of Delhi and Lucknow is 25 Degree Celsius"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: 'get me sum of weather for delhi and bangalore'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi."}\n' +
      '   '
  },
  {
    role: 'assistant',
    content: '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}'
  }
]
[msg] ----------- AI  END  ------------



[msg] ----------- AI BEGIN ------------
{"type":"plan", "plan": "I will call the getWeatherDetails for Bangalore."}
[
  {
    role: 'system',
    content: '\n' +
      'You are an AI Assistant with START, PLAN, ACTION, OBSERVATION and OUTPUT states\n' +
      'wait for the user prompt, first PLAN using available tools.\n' +
      'After Planning, take appropriate action with tool and wait for observation based on action\n' +
      'once you get observation, return AI response based on START prompt and OBSERVATION\n' +
      '\n' +
      'Strictly follow json output format as in Example \n' +
      '\n' +
      'Available Tools:\n' +
      ' - function getWeatherDetails(city: string): string\n' +
      '   getWeatherDetails is a function that takes city as a string input and returns weather details as string.\n' +
      '\n' +
      '\n' +
      'Example: \n' +
      'START \n' +
      '{"type":"user", "user": "what is sum of weather of Delhi and Lucknow"}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi"}\n' +
      '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}\n' +
      '{"type":"observation", "observation": "15 degree Celsius}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Lucknow"}\n' +
      '{"type":"action", "function": "getWeatherDetails","input":"Lucknow"}\n' +
      '{"type":"observation", "observation": "10 Degree Celsius"}\n' +
      '{"type":"output", "output": "The sum of weather of Delhi and Lucknow is 25 Degree Celsius"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: 'get me sum of weather for delhi and bangalore'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi."}\n' +
      '   '
  },
  {
    role: 'assistant',
    content: '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}'
  },
  {
    role: 'developer',
    content: '{"type":"observation","observation":"25 degree Celsius"}'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Bangalore."}'
  }
]
[msg] ----------- AI  END  ------------



[msg] ----------- AI BEGIN ------------
{"type":"action", "function": "getWeatherDetails", "input":"bangalore"}
[
  {
    role: 'system',
    content: '\n' +
      'You are an AI Assistant with START, PLAN, ACTION, OBSERVATION and OUTPUT states\n' +
      'wait for the user prompt, first PLAN using available tools.\n' +
      'After Planning, take appropriate action with tool and wait for observation based on action\n' +
      'once you get observation, return AI response based on START prompt and OBSERVATION\n' +
      '\n' +
      'Strictly follow json output format as in Example \n' +
      '\n' +
      'Available Tools:\n' +
      ' - function getWeatherDetails(city: string): string\n' +
      '   getWeatherDetails is a function that takes city as a string input and returns weather details as string.\n' +
      '\n' +
      '\n' +
      'Example: \n' +
      'START \n' +
      '{"type":"user", "user": "what is sum of weather of Delhi and Lucknow"}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi"}\n' +
      '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}\n' +
      '{"type":"observation", "observation": "15 degree Celsius}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Lucknow"}\n' +
      '{"type":"action", "function": "getWeatherDetails","input":"Lucknow"}\n' +
      '{"type":"observation", "observation": "10 Degree Celsius"}\n' +
      '{"type":"output", "output": "The sum of weather of Delhi and Lucknow is 25 Degree Celsius"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: 'get me sum of weather for delhi and bangalore'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi."}\n' +
      '   '
  },
  {
    role: 'assistant',
    content: '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}'
  },
  {
    role: 'developer',
    content: '{"type":"observation","observation":"25 degree Celsius"}'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Bangalore."}'
  },
  {
    role: 'assistant',
    content: '{"type":"action", "function": "getWeatherDetails", "input":"bangalore"}'
  }
]
[msg] ----------- AI  END  ------------



[msg] ----------- AI BEGIN ------------
{"type":"output", "output": "The sum of weather for Delhi and Bangalore is 48 degree Celsius."}
[
  {
    role: 'system',
    content: '\n' +
      'You are an AI Assistant with START, PLAN, ACTION, OBSERVATION and OUTPUT states\n' +
      'wait for the user prompt, first PLAN using available tools.\n' +
      'After Planning, take appropriate action with tool and wait for observation based on action\n' +
      'once you get observation, return AI response based on START prompt and OBSERVATION\n' +
      '\n' +
      'Strictly follow json output format as in Example \n' +
      '\n' +
      'Available Tools:\n' +
      ' - function getWeatherDetails(city: string): string\n' +
      '   getWeatherDetails is a function that takes city as a string input and returns weather details as string.\n' +
      '\n' +
      '\n' +
      'Example: \n' +
      'START \n' +
      '{"type":"user", "user": "what is sum of weather of Delhi and Lucknow"}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi"}\n' +
      '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}\n' +
      '{"type":"observation", "observation": "15 degree Celsius}\n' +
      '{"type":"plan", "plan": "I will call the getWeatherDetails for Lucknow"}\n' +
      '{"type":"action", "function": "getWeatherDetails","input":"Lucknow"}\n' +
      '{"type":"observation", "observation": "10 Degree Celsius"}\n' +
      '{"type":"output", "output": "The sum of weather of Delhi and Lucknow is 25 Degree Celsius"}\n' +
      '\n'
  },
  {
    role: 'user',
    content: 'get me sum of weather for delhi and bangalore'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Delhi."}\n' +
      '   '
  },
  {
    role: 'assistant',
    content: '{"type":"action", "function": "getWeatherDetails", "input":"delhi"}'
  },
  {
    role: 'developer',
    content: '{"type":"observation","observation":"25 degree Celsius"}'
  },
  {
    role: 'assistant',
    content: '{"type":"plan", "plan": "I will call the getWeatherDetails for Bangalore."}'
  },
  {
    role: 'assistant',
    content: '{"type":"action", "function": "getWeatherDetails", "input":"bangalore"}'
  },
  {
    role: 'developer',
    content: '{"type":"observation","observation":"23 degree Celsius"}'
  },
  {
    role: 'assistant',
    content: '{"type":"output", "output": "The sum of weather for Delhi and Bangalore is 48 degree Celsius."}'
  }
]
[msg] ----------- AI  END  ------------
😀 > The sum of weather for Delhi and Bangalore is 48 degree Celsius. 