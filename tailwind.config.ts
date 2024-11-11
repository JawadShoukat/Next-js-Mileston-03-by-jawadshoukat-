import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   container:{
    center: true,
    padding: "15px"
   },
    },
    colors: {
      accent: "#FFB9C",
      sky: "#00bfff",
      blackish: "#1b1b1b",
      gray: "#808080, 200",
      white: "#ffffff",
      red: "#dc2626" ,
     text: "#333333", 
      main: "#f9f9f9",
      mintgreen: "#388E3c",
     
  
     
    },
  },
  plugins: [],
};
export default config;
