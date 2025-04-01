import { CoreMessage, streamText } from 'ai';
import { google } from '@ai-sdk/google';
import  { readFileSync } from 'fs';


export async function POST(req: Request) 
{
  const { messages }: { messages: CoreMessage[] } = await req.json();
  console.log(message)

  
    

    
    const  response  =  streamText({
      model: google('gemini-2.5-pro-exp-03-25'),
      system: 'Read through the provided content and understand the information. then answer the question to the point',
      messages:[{
        role:"user",
      
      content: [
        {
          type: 'file',
          data: readFileSync('C:/Users/marcs/acadregbot/FFCS_Academic_Regulation_4_0_Final (1)-pages-deleted-pages-deleted.pdf'),
          mimeType:'application/pdf'
        },
        
        
        
        
      ],
    }]});
    return response.toDataStreamResponse();

    
 } 
