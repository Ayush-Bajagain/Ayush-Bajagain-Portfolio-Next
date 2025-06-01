import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-shift": "gradient-shift 15s ease infinite",
        "float-1": "float 8s ease-in-out infinite",
        "float-2": "float 12s ease-in-out infinite",
        "float-3": "float 10s ease-in-out infinite",
        "float-4": "float 14s ease-in-out infinite",
        "float-5": "float 9s ease-in-out infinite",
        "mesh": "mesh 20s ease-in-out infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "25%": {
            transform: "translateY(-20px) translateX(10px)",
          },
          "50%": {
            transform: "translateY(-10px) translateX(20px)",
          },
          "75%": {
            transform: "translateY(-30px) translateX(10px)",
          },
        },
        "mesh": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "0% 0%",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "100% 100%",
          },
        },
      },
    },
  },
  plugins: [],
}

export default config 