import OpenAI from "openai";

const client = new OpenAI({ 
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true
});

export default client;