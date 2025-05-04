/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        xs: 10,
        sm: 12,
        base: 14,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 30,
        custom: 36, // 👈 your custom font size
      },
    },
  },
  plugins: [],
}

