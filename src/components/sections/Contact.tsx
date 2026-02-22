"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, Linkedin, Globe, CheckCircle2, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulated network request (Supabase logic can be toggled here)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccess(true);
    (e.target as HTMLFormElement).reset();
    setLoading(false);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-6xl mx-auto w-full relative bg-background/20 backdrop-blur-md border-y border-foreground/5">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 relative z-10">

        {/* Left Side: Strategic Outreach Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold">Initiate Connection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-foreground tracking-tight">
              Let's Architect <br /><span className="text-accent">Solutions.</span>
            </h2>
            <p className="mt-6 text-foreground/60 leading-relaxed max-w-sm">
              Available for strategic collaborations, industrial digitization consultancies, and supply chain leadership inquiries.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono text-foreground/40">Professional Network</p>
                <a href="#" className="text-sm font-bold hover:text-accent transition-colors">linkedin.com/in/sohaiblatif</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20 group-hover:bg-accent group-hover:text-black transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-mono text-foreground/40">Direct Inquiry</p>
                <a href="mailto:contact@sohaiblatif.com" className="text-sm font-bold hover:text-accent transition-colors">contact@sohaiblatif.com</a>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 inline-flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-foreground/60 uppercase tracking-wider">Response SLA: &lt; 24 Hours</span>
          </div>
        </motion.div>

        {/* Right Side: The Inquiry Portal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <GlassCard hoverEffect={false} className="p-8 md:p-10 border-foreground/5 bg-foreground/[0.01]">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-[400px] flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold font-outfit">Transmission Received</h3>
                <p className="text-foreground/60 max-w-xs">Your inquiry has been logged. I will review the technical details and respond shortly.</p>
                <Button variant="outline" onClick={() => setSuccess(false)}>Send Another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono font-bold text-foreground/40 ml-1">Full Name</label>
                    <input
                      name="name"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-foreground/20"
                      placeholder="e.g. Salim Al-Mansouri"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono font-bold text-foreground/40 ml-1">Work Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-foreground/20"
                      placeholder="name@company.ae"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono font-bold text-foreground/40 ml-1">Project Brief / Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-foreground/[0.03] border border-foreground/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none placeholder:text-foreground/20"
                    placeholder="Describe the scope of work or technical inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-accent hover:bg-emerald-600 text-white font-bold tracking-wide transition-all shadow-lg shadow-accent/10"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="animate-spin mr-2" size={20} />
                  ) : (
                    <MessageSquareText className="mr-2" size={20} />
                  )}
                  {loading ? "Processing Transmission..." : "Initialize Connection"}
                </Button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}