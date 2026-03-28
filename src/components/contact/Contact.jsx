import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_ru2t5dm",
        "template_scppr9m",
        form.current,
        "nvxLSxyMRwaILUOHZ"
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-28 bg-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 top-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3">
            I'm currently open to new opportunities. Drop me a message and I'll get
            back to you as soon as possible.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl">
                  <MdOutlineEmail className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Me At</p>
                  <p className="text-white font-medium">wrightsprince@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:wrightsprince@gmail.com"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors font-medium"
              >
                Send an email →
              </a>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <p className="text-sm text-slate-400 mb-4 font-medium uppercase tracking-wider">Connect With Me</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/prince-ephraim-quarshie/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 text-slate-300 hover:text-primary transition-all duration-200"
                >
                  <BsLinkedin size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/quarshie133"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200"
                >
                  <BsGithub size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass-card p-8 flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project…"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200 resize-none"
                />
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm">
                  <FiCheckCircle size={16} />
                  Message sent successfully! I'll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary justify-center w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
