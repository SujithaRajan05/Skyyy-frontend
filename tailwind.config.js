/** @type {import('tailwindcss').Config} */
export default {
 content:["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      colors: {
        pastelPurple: "#e2d6f5",
        pastelPink: "#f8d7da",
        pastelGreen: "#d4edda",
        pastelYellow: "#fff3cd",
        pastelGray: "#f5f5f5",
      },

    },
  },
  plugins: [],
}

