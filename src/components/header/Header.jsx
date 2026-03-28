import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";
import { FiCode, FiLayout, FiServer, FiZap } from "react-icons/fi";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const Header = () => {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Grid dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-32 lg:py-0">
          {/* Left: Text Content */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Prince Ephraim Quarshie
              </span>
            </motion.h1>

            <motion.h2
              {...fadeUp(0.3)}
              className="text-xl sm:text-2xl font-medium text-slate-400 mb-6"
            >
              Full-Stack Software Engineer
            </motion.h2>

            <motion.p
              {...fadeUp(0.4)}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              I craft clean, performant, and visually compelling web experiences.
              Passionate about turning ideas into elegant digital products with
              React and modern web technologies.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex items-center gap-5"
            >
              <span className="text-sm text-slate-500">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/quarshie133"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <BsGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prince-e-quarshie/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all duration-200"
                >
                  <BsLinkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Animated Tech Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl scale-110" />

              {/* Main card */}
              <div className="relative w-full h-full bg-dark-200/90 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 backdrop-blur-sm shadow-2xl shadow-primary/10">
                {/* Code editor header dots */}
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-2 text-xs text-slate-500 font-mono">portfolio.tsx</span>
                </div>

                {/* Fake code lines */}
                <div className="flex-1 font-mono text-xs space-y-1.5">
                  <p><span className="text-accent">const</span> <span className="text-white">developer</span> <span className="text-slate-400">=</span> {'{'}</p>
                  <p className="pl-4"><span className="text-primary">name</span><span className="text-slate-400">:</span> <span className="text-green-400">"Prince E. Quarshie"</span><span className="text-slate-400">,</span></p>
                  <p className="pl-4"><span className="text-primary">role</span><span className="text-slate-400">:</span> <span className="text-green-400">"Full-Stack Engineer"</span><span className="text-slate-400">,</span></p>
                  <p className="pl-4"><span className="text-primary">stack</span><span className="text-slate-400">:</span> <span className="text-slate-300">[</span></p>
                  <p className="pl-8"><span className="text-green-400">"React"</span><span className="text-slate-400">,</span> <span className="text-green-400">"Next.js"</span><span className="text-slate-400">,</span></p>
                  <p className="pl-8"><span className="text-green-400">"TypeScript"</span><span className="text-slate-400">,</span> <span className="text-green-400">"Node.js"</span><span className="text-slate-400">,</span></p>
                  <p className="pl-8"><span className="text-green-400">"React Native"</span></p>
                  <p className="pl-4"><span className="text-slate-300">]</span><span className="text-slate-400">,</span></p>
                  <p className="pl-4"><span className="text-primary">available</span><span className="text-slate-400">:</span> <span className="text-accent">true</span></p>
                  <p>{'}'}<span className="text-slate-400">;</span></p>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 bg-dark-200 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-slate-400">Experience</p>
                <p className="text-lg font-bold text-white">4+ Years</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-6 bg-dark-200 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-slate-400">Projects</p>
                <p className="text-lg font-bold text-white">40+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-primary transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
