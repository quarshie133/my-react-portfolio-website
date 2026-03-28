import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPrisma, SiPostgresql, SiGit, SiMongodb, SiExpress } from "react-icons/si";
import { BsPhone } from "react-icons/bs";

const stats = [
  { icon: <FaAward className="text-primary text-2xl" />, label: "Experience", value: "4+ Years" },
  { icon: <FiUsers className="text-primary text-2xl" />, label: "Clients", value: "20+" },
  { icon: <VscFolderLibrary className="text-primary text-2xl" />, label: "Projects", value: "40+" },
];

const techStack = [
  { icon: <SiReact />, label: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "text-white" },
  { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-400" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "text-sky-400" },
  { icon: <BsPhone />, label: "React Native", color: "text-cyan-300" },
  { icon: <SiNodedotjs />, label: "Node.js", color: "text-green-400" },
  { icon: <SiExpress />, label: "Express.js", color: "text-slate-300" },
  { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
  { icon: <SiPrisma />, label: "Prisma", color: "text-teal-400" },
  { icon: <SiPostgresql />, label: "PostgreSQL", color: "text-blue-300" },
  { icon: <SiGit />, label: "Git", color: "text-orange-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="py-28 bg-dark relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Get To Know</span>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Tech Stack Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8"
          >
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {techStack.map(({ icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <span className={`text-xl ${color} group-hover:scale-110 transition-transform duration-200`}>
                    {icon}
                  </span>
                  <span className="text-sm font-medium text-slate-300">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Stats Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="glass-card p-4 text-center hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-2">{icon}</div>
                  <p className="text-xs text-slate-400 mb-1">{label}</p>
                  <p className="text-base font-bold text-white">{value}</p>
                </div>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed mb-4"
            >
              Full-Stack Software Engineer with 4+ years of experience building
              responsive, scalable web and mobile applications using React,
              Flutter, and JavaScript. Proven ability to collaborate with backend
              teams, integrate RESTful APIs, and deliver user-centric products that
              improve operational efficiency and engagement.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed mb-6"
            >
              Experienced in agile environments and passionate about building
              high-quality digital solutions. Currently pursuing an MSc in
              Computer Science at the University of Ghana with a focus on Machine
              Learning and Advanced Software Engineering.
            </motion.p>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Education</p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">MSc in Computer Science</p>
                  <p className="text-xs text-slate-400">University of Ghana · Oct 2025 – Present</p>
                  <p className="text-xs text-slate-500 mt-0.5">Machine Learning &amp; Advanced Software Engineering</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">BSc in Information Technology</p>
                  <p className="text-xs text-slate-400">Ghana Communication Technology University</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#contact"
              className="btn-primary inline-flex"
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
