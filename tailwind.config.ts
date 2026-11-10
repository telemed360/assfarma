import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F1F7F2",
          100: "#DDEDE1",
          200: "#BBDAC3",
          300: "#8FC09D",
          400: "#5FA073",
          500: "#3E8254",
          600: "#2F6941",
          700: "#2B4F35",
          800: "#233F2B",
          900: "#1C3223",
          950: "#0F1E14",
        },
        navy: {
          50: "#EEF4F1",
          100: "#D5E4DC",
          200: "#ABC9B9",
          300: "#7AA891",
          400: "#4F866C",
          500: "#356A52",
          600: "#275441",
          700: "#1F4434",
          800: "#183629",
          900: "#11281E",
          950: "#0A1912",
        },
        /* Laranja da logo: usado em CTAs e destaques. */
        accent: {
          50: "#FEF3EE",
          100: "#FDE3D7",
          200: "#FAC4AD",
          300: "#F79C79",
          400: "#F47D50",
          500: "#F16536",
          600: "#DB4C1E",
          700: "#B63B17",
          800: "#91311A",
          900: "#752B19",
          950: "#3F130A",
        },
        ink: {
          DEFAULT: "#0B1B2B",
          soft: "#33475B",
          muted: "#64798C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,27,43,.04), 0 8px 24px -12px rgba(11,27,43,.14)",
        card: "0 2px 4px rgba(11,27,43,.04), 0 18px 40px -20px rgba(11,27,43,.22)",
        lift: "0 8px 12px rgba(11,27,43,.05), 0 32px 60px -28px rgba(43,79,53,.42)",
        glow: "0 0 0 1px rgba(241,101,54,.18), 0 22px 60px -24px rgba(241,101,54,.55)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(.85)", opacity: "0.7" },
          "80%,100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseRing: "pulseRing 2.6s cubic-bezier(.24,.8,.4,1) infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
