import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { projects } from "../../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Portfolio = () => {
  return (
    <section id="projects" className="py-28 bg-dark-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3">
            A selection of projects I've built — from client sites to personal experiments.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/quarshie133"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <BsGithub size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      variants={cardVariants}
      className="glass-card p-6 flex flex-col gap-4 group hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Project Header */}
      <div className="flex items-start justify-between">
        <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
          <BsGithub className="text-primary text-xl" />
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <BsGithub size={17} />
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-primary transition-colors"
            aria-label="Live Demo"
          >
            <BsArrowUpRightSquare size={17} />
          </a>
        </div>
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <BsGithub size={14} />
            Code
          </a>
        )}
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-light transition-colors ml-auto font-medium"
        >
          Live Demo
          <BsArrowUpRightSquare size={13} />
        </a>
      </div>
    </motion.article>
  );
};

export default Portfolio;
