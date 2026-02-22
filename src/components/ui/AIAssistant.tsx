"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const SYSTEM_PROMPT = `You are Sohaib Latif’s AI assistant. Your goal is to help visitors understand Sohaib’s expertise in Strategic Supply Chain, ISO 9001 systems, and Engineering. Use the content from this portfolio to answer questions. If someone asks something unrelated, politely steer them back to Sohaib’s professional background.`;

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am Sohaib's AI Assistant. How can I help you learn more about his background in Strategic Supply Chain, Engineering, or Industrial Automation?"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputVal.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal("");
    setIsLoading(true);

    try {
      if (!API_KEY) {
        throw new Error("Missing API Key. Please ensure NEXT_PUBLIC_GEMINI_API_KEY is set in your environment variables.");
      }

      // Structure history for Gemini
      const contents = messages.slice(1).map(msg => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

      // Add the new user message
      contents.push({
        role: "user",
        parts: [{ text: userMessage.content }]
      });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: contents
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (aiResponseText) {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), role: "assistant", content: aiResponseText }
        ]);
      }
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: `Error: ${error.message}`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-shadow border border-accent/20"
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] md:w-[380px] h-[550px] max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-white/20 dark:border-accent/20 bg-background/95 backdrop-blur-2xl rounded-2xl"
          >
            {/* Header */}
            <div className="flex-none items-center justify-between p-4 border-b border-foreground/10 bg-accent/5 flex">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold font-outfit text-sm text-foreground">AI Assistant</h3>
                  <p className="text-[10px] text-accent font-mono uppercase tracking-wider">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-foreground/10 text-foreground/70' : 'bg-accent/20 text-accent'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>

                  <div className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-foreground/10 text-foreground rounded-tr-sm'
                    : 'bg-accent/10 border border-accent/10 text-foreground/90 rounded-tl-sm'
                    }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Bot size={16} />
                  </div>
                  <div className="px-5 py-4 rounded-2xl bg-accent/5 border border-accent/10 rounded-tl-sm flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="mt-auto p-4 border-t border-foreground/10 bg-background flex-none">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about Sohaib's experience..."
                  disabled={isLoading}
                  className="w-full bg-foreground/5 border border-foreground/10 rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-full bg-accent text-white hover:bg-emerald-500 disabled:opacity-50 disabled:hover:bg-accent transition-colors"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
