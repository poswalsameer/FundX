import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
export async function POST(Request: NextRequest){

    if( Request.method !== "POST") {
        return NextResponse.json(
            {message: "Method not allowed"},
            {status: 405}
        )
    }
    
    const { startupName } = await Request.json();

    if (!startupName) {
        return NextResponse.json(
            {message: "Please enter the name of a startup"},
            {status: 400}
        )
    }

    try {

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const  prompt = `I am a venture capitalist, I am looking forward to invest in ${startupName} but I am a bit dicey if I should do it or not. You being a AI help me in letting me know is ${startupName} is investible or not? Don't fall short of words, explain everything about ${startupName} in detail. Tell about its business model, product market fit, target audience, pros and cons, profitability, negative points, work culture, everything you can think of. If needed, take help of the internet and find out more information about ${startupName}. The data provided should be in the form of markdown, it should have all necessary markdown so it can be rendered correctly`;    

        const result = await model.generateContentStream(prompt);

        const readableStream = new ReadableStream({
            async pull(controller) {
              // For each chunk in the stream from Gemini API, push it to the frontend
              for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                controller.enqueue(chunkText);
              }
              controller.close();
            },
        });

        return new NextResponse(readableStream, {
            headers: { "Content-Type": "text/plain" },
        });
    } 
    catch (error) {
        return NextResponse.json(
            {message: "Error while generating content on the entered startup"},
            {status: 500}
        )
    }

}