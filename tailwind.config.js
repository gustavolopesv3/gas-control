module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#081A51",
        "orange": "#C66002",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};