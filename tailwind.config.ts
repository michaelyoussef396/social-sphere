const defaultTheme = require("tailwindcss/defaultTheme");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        background1: "#f9f6f1",
        text: "#2e2e2e",
        accent: "#0a0a0a",
        cream: "#ffffff",
        gold: "#a78b56",
        green: "#98b17c",
        grayLight: "#e6e4e1",
        elegantWhite: "#fdfdfd",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      fontFamily: {
        sans: ["Gilda Display", ...defaultTheme.fontFamily.sans],
        cormorant: ["Cormorant", "serif"],
        doulaise: ["Monsieur La Doulaise", "cursive"],
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: { addBase: (base: any) => void, theme: (path: string) => any }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
