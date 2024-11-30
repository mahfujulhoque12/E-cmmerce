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
  		keyframes: {
  			'flow-down': {
  				'0%': {
  					transform: 'translateY(-100%)',
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '0.5'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'flow-down': 'flow-down 0.5s ease-out'
  		},
  		colors: {
  			'light-gray': '#BDBDBD',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			bodyBgColor: '#F4F7FE'
  		},
  		backgroundImage: {
  			'blue-gradient': 'linear-gradient(to right, #1768D0, #0070FF)',
  			'deep-blue-to-light-purple': 'linear-gradient(0deg, #3528C5 0%, #7367F0 100%)',
  			'gradient-text': 'linear-gradient(to right, #1768D0, #0070FF)',
  			'teal-gradient': 'linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)',
  			'aqua-teal-gradient': 'linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)',
  			'golden-yellow-gradient': 'linear-gradient(99.14deg, #FCAA22 -46.88%, #FED44F 97.53%)',
  			'pink-red-gradient': 'linear-gradient(270deg, #F72F7C 0%, #D62170 91.23%)',
  			'overlay-light-gray': 'linear-gradient(0deg, rgba(94, 94, 94, 0.18), rgba(94, 94, 94, 0.18)), linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06))'
  		},
  		boxShadow: {
  			'soft-blue': '0px 10px 50px 0.78px rgba(174, 203, 250, 0.121)',
  			deep: '0px 5px 16px 0px rgba(8, 15, 52, 0.062)',
  			'deep-blue': '0px 5px 16px 0px #080F340F',
  			'light-shadow': '0px 5px 16px 0px #080F340F'
  		},
  		borderWidth: {
  			'0.5': '0.5px'
  		},
  		fontFamily: {
  			opensans: 'var(--font-open-sans)'
  		},
  		maxWidth: {
  			'screen-2xl': '1252px',
  			'offer-card-width': '346.33px',
  			'top-airlines-card-width': '344.33px'
  		},
  		letterSpacing: {
  			'0.5': '0.5%'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
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
