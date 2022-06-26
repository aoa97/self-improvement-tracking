module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      body: ["Baloo Bhaijaan 2", "cursive"],
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: "#FFA866",
          100: "#FFF7E4",
          200: "#FCD9BD",
        },
        black: "#111827",
        gray: {
          DEFAULT: "#9CA3AF",
          100: "#CBCBCB",
        },
        white: "#FFF",
      },
      boxShadow: {
        card: "0 -1px 4px 0 rgba(139, 139, 139, 0.25)",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("flowbite/plugin")],
};
