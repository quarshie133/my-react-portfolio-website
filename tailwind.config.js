/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#6c63ff",
          light: "#8b85ff",
          dark: "#5449e6",
        },
        accent: {
          DEFAULT: "#00d4ff",
          light: "#33ddff",
          dark: "#00aacc",
        },
        dark: {
          DEFAULT: "#0a0a0f",
          100: "#111118",
          200: "#1a1a25",
          300: "#24243a",
          400: "#2e2e50",
        },
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse at 20% 50%, rgba(108,99,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.1) 0%, transparent 60%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(0,212,255,0.05) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
