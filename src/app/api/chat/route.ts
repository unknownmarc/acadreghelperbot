import { CoreMessage, generateText } from 'ai';
import { google } from '@ai-sdk/google';
import fs, { readFileSync } from 'fs';
import path from 'path';

export async function POST(req: Request) 
{
  const { messages }: { messages: CoreMessage[] } = await req.json();

  
    

    // Generate response from Gemini with PDF context
    const { response } = await generateText({
      model: google('gemini-2.0-flash-001'),
      system: `You're an assistant that answers questions based on the provided PDF`+
      ` Answer questions based on information in the pdf`
      +`keep your answers short and concise`+`if you do not have an answer say you do not know`
      +`if the question is not related to the contents of the pdf replying saying to ask relevant questions`,
      messages:[{
        role:"user",
      
      content: [
        {
          type: 'file',
          data: readFileSync('C:/Users/marcs/acadregbot/FFCS_Academic_Regulation_4_0_Final (1).txt'),
          mimeType:'text/plain'
        }
      ],
    }]});

    return Response.json({ messages: response.messages });
 } 
