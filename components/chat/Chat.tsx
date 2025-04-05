"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ChatMessage{
  id: number;
  sender: "me" | "company";
  text: string;
  status: "delivered" | "seen";
  time: string;
  image?: string;
  name?: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const endRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12 : true
    });

    const newMessage: ChatMessage = {
      id: Date.now(),
      sender: "me",
      text: inputText.trim(),
      status: "delivered",
      time: currentTime,
      name: "Mohammad",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });

    const timeout = setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.sender === "me" && msg.status === "delivered"
            ? { ...msg, status: "seen" }
            : msg
        )
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div className="max-w-2xl mt-10 mx-auto h-[500px] flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`chat ${msg.sender === "me" ? "chat-end" : "chat-start"}`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  alt="Avatar"
                  width={40}
                  height={40}
                  src={
                    msg.image ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>

            <div className="chat-header">
              {msg.name || (msg.sender === "me" ? "Me" : "Company")}
              <time className="text-xs opacity-50 ml-2">{msg.time}</time>
            </div>

            <div
              className={`chat-bubble ${
                msg.sender === "me" ? "chat-bubble-info" : "chat-bubble-primary"
              }`}
            >
              {msg.text}
            </div>

            <div className="chat-footer text-xs opacity-50">
              {msg.status === "seen"
                ? `Seen at ${msg.time}`
                : "Delivered"}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="p-4 border-t border-accent flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
