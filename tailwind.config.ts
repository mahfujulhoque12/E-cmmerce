/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#BDBDBD",
      },
      backgroundColor: {
        bodyBgColor: "#F4F7FE",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #1768D0, #0070FF)",
        "deep-blue-to-light-purple":
          "linear-gradient(0deg, #3528C5 0%, #7367F0 100%)",
        "gradient-text": "linear-gradient(to right, #1768D0, #0070FF)",
        "teal-gradient": "linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)",
        "aqua-teal-gradient":
          "linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)",
        "golden-yellow-gradient":
          "linear-gradient(99.14deg, #FCAA22 -46.88%, #FED44F 97.53%)",
        "pink-red-gradient":
          "linear-gradient(270deg, #F72F7C 0%, #D62170 91.23%)",
        "overlay-light-gray":
          "linear-gradient(0deg, rgba(94, 94, 94, 0.18), rgba(94, 94, 94, 0.18)), linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06))",
      },
      boxShadow: {
        "soft-blue": "0px 10px 50px 0.78px rgba(174, 203, 250, 0.121)",
        deep: "0px 5px 16px 0px rgba(8, 15, 52, 0.062)",
        "deep-blue": "0px 5px 16px 0px #080F340F",
        "light-shadow": "0px 5px 16px 0px #080F340F",
      },

      borderWidth: {
        "0.5": "0.5px",
      },

      fontFamily: {
        opensans: "var(--font-open-sans)",
      },
      maxWidth: {
        "screen-2xl": "1252px",
        "offer-card-width": "346.33px",
        "top-airlines-card-width": "344.33px",
      },
      letterSpacing: {
        "0.5": "0.5%",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".gradient-text": {
          background: "linear-gradient(to right, #1768D0, #0070FF)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "background-clip": "text",
          "text-fill-color": "transparent",
        },
        ".pink": {
          background: "linear-gradient(270deg, #F72F7C 0%, #D62170 91.23%)",
        },
        ".teal": {
          background: "linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)",
        },
        ".yellow": {
          background:
            "linear-gradient(99.14deg, #FCAA22 -46.88%, #FED44F 97.53%)",
        },
      });
    },
  ],
};

export default config;
