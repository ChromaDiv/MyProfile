"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { GlassCard } from "@/components/ui/GlassCard";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const SYSTEM_PROMPT = `You are Sohaib Latif’s AI assistant. Your goal is to help visitors understand Sohaib’s expertise in Strategic Supply Chain, ISO 9001 systems, and Engineering. Use the content from this portfolio to answer questions. If someone asks something unrelated, politely steer them back to Sohaib’s professional background.`;

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const AnimatedBot = ({ isProcessing = false }: { isProcessing?: boolean }) => {
  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className={`relative w-8 h-8 min-w-[32px] rounded-full flex items-center justify-center bg-accent/20 border border-accent/20 ${isProcessing ? "shadow-[0_0_15px_rgba(16,185,129,0.5)]" : ""
        }`}
    >
      <div className="w-4 h-3 bg-accent/40 rounded-sm relative flex items-center justify-center gap-1 overflow-hidden">
        <motion.div
          animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
          className={`w-1 h-1 rounded-full flex-shrink-0 ${isProcessing ? "bg-white shadow-[0_0_5px_white]" : "bg-accent"}`}
        />
        <motion.div
          animate={{ scaleY: [1, 0.1, 1], opacity: [1, 0.8, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
          className={`w-1 h-1 rounded-full flex-shrink-0 ${isProcessing ? "bg-white shadow-[0_0_5px_white]" : "bg-accent"}`}
        />
      </div>
      <div className="absolute -top-1.5 w-0.5 h-1.5 bg-accent/50 rounded-full" />
    </motion.div>
  );
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
  const [hasOpened, setHasOpened] = useState(false);
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

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { setIsOpen(true); setHasOpened(true); }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-accent text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-shadow border border-accent/20 group"
          >
            <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
            <span className="font-outfit font-medium text-sm whitespace-nowrap pr-1">Chat with AI</span>
            {!hasOpened && (
              <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_5px_white]"></span>
              </span>
            )}
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
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] md:w-[380px] h-[550px] max-h-[85vh] flex flex-col shadow-2xl rounded-2xl group border border-foreground/10 dark:border-white/10 hover:border-accent/50 transition-all duration-500"
          >
            {/* Ambient Background Gradient Pulse */}
            <motion.div
              animate={isLoading ? { opacity: [0.3, 0.7, 0.3], scale: [1, 1.02, 1] } : { opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: isLoading ? 1.5 : 3, ease: "easeInOut" }}
              className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur-xl pointer-events-none -z-10"
            />

            {/* Inner Content Wrapper */}
            <div className="relative z-10 w-full h-full flex flex-col overflow-hidden bg-background/95 backdrop-blur-2xl rounded-2xl">
              {/* Header */}
              <div className="flex-none items-center justify-between p-4 border-b border-foreground/10 bg-accent/5 flex">
                <div className="flex items-center gap-3">
                  <AnimatedBot isProcessing={isLoading} />
                  <div>
                    <h3 className="font-bold font-outfit text-sm text-foreground">AI Assistant</h3>
                    <div className="flex items-center gap-1">
                      <p className="text-[10px] text-accent font-mono uppercase tracking-wider">
                        {isLoading ? "Processing" : "Online"}
                      </p>
                      {isLoading && (
                        <div className="flex gap-0.5 mt-0.5">
                          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1 h-1 bg-accent rounded-full" />
                          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} className="w-1 h-1 bg-accent rounded-full" />
                          <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }} className="w-1 h-1 bg-accent rounded-full" />
                        </div>
                      )}
                    </div>
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
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-foreground/10 text-foreground/70' : 'bg-transparent text-accent'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <AnimatedBot />}
                    </div>

                    <div className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${msg.role === 'user'
                      ? 'bg-foreground/10 text-foreground rounded-tr-sm'
                      : 'bg-accent/10 border border-accent/10 text-foreground/90 rounded-tl-sm'
                      }`}>
                      <ReactMarkdown
                        components={{
                          strong: ({ node, ...props }: any) => <strong className="font-bold text-foreground" {...props} />
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-accent">
                      <AnimatedBot isProcessing={true} />
                    </div>
                    <div className="px-5 py-4 rounded-2xl bg-accent/5 border border-accent/10 rounded-tl-sm flex gap-1 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Footer */}
              <div className="mt-auto p-4 border-t border-foreground/10 bg-background flex-none rounded-b-2xl">
                <form onSubmit={handleSend} className="relative flex items-center">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask about Sohaib's experience..."
                    disabled={isLoading}
                    className="w-full bg-foreground/5 border border-foreground/10 rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                  />
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    type="submit"
                    disabled={!inputVal.trim() || isLoading}
                    className="absolute right-2 p-2 rounded-full bg-accent text-white hover:bg-emerald-500 disabled:opacity-50 disabled:hover:bg-accent transition-colors"
                  >
                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
