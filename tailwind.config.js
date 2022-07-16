module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: "disable",
  theme: {
    fontFamily: {
      body: ["Baloo Bhaijaan 2", "cursive"],
    },
    screens: {
      xs: { max: "343px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
          DEFAULT: "#999",
          100: "#CBCBCB",
        },
        white: "#FFF",
      },
      boxShadow: {
        card: "0 -1px 4px 0 rgba(139, 139, 139, 0.25)",
      },
    },
  },
};
