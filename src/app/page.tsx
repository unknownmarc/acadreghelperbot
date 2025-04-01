"use client";

import Image from "next/image";
import ChatBubble from "./components/ChatBubble";
import logo from "../app/Vellore_Institute_of_Technology_seal_2017.svg.png";

import { useChat } from "@ai-sdk/react";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
        <div className="flex items-center justify-left">
          <div className="rounded-full overflow-hidden relative pb-5">
            <Image
              src={logo}
              alt=""
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
        </div>

        <h4 className="text-xl font-bold md:text-xl pb-4 text-white'">
          VIT Helper Bot
        </h4>
        <h4 className="text-sm font-light  pb-4 text-gray-900'">
          (Kindly allow the bot upto 30 seconds to answer)
        </h4>

        {messages.map((m) => (
          <ChatBubble
            key={m.id}
            id={m.id}
            role={m.role === "user" ? "You" : "Helper Bot"}
            content={m.content}
          />
        ))}

        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-white"
            value={input}
            placeholder="What is your query..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}
