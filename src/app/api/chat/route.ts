import { CoreMessage, streamText } from 'ai';
import { google } from '@ai-sdk/google';
import  { readFileSync } from 'fs';



export async function POST(req: Request) 
{
  const { messages }: { messages: CoreMessage[] } = await req.json();
  
  const lastMessage = messages[messages.length - 1].content;
  
  
    

    
    const  response  =  streamText({
      model: google('gemini-2.5-pro-exp-03-25'),
      system: `Read through the provided content and understand the information. Keep your answers short but dont miss out on key information, format your replies into proper points. Dont say "based on the provided document", just directly answer the question`,
      
      messages:[{
        role:"user",
      
      content: [
        {
          type: 'file',
          data: readFileSync('C:/Users/marcs/acadregbot/FFCS_Academic_Regulation_4_0_Final (1)-pages-deleted-pages-deleted.pdf'),
          mimeType:'application/pdf'
        },
        { 
          type: 'text',
          text: typeof lastMessage === 'string' ? lastMessage : String(lastMessage)
        }
        
        
        
        
        
      ],
    }]});
    
    return response.toDataStreamResponse();

    
 } 
