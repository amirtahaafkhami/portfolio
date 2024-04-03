/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "GilroyUltraLightItalic": "Gilroy UltraLight Italic",
        "GilroyUltraLight": "Gilroy UltraLight",
        "GilroyThinItalic": "Gilroy Thin Italic",
        "GilroyThin": "Gilroy Thin",
        "GilroySemiboldItalic": "Gilroy Semibold Italic",
        "GilroySemibold": "Gilroy Semibold",
        "GilroyRegularItal": "Gilroy Regular Italic",
        "Gilroy": "Gilroy Regular",
        "GilroyMediumItalic": "Gilroy Medium Italic",
        "GilroyMedium": "Gilroy Medium",
        "GilroyLightItalic": "Gilroy Light Italic",
        "GilroyLight": "Gilroy Light",
        "GilroyHeavyItalic": "Gilroy Heavy Italic",
        "GilroyHeavy": "Gilroy Heavy",
        "Gilroy ExtraBoldItalic": "Gilroy ExtraBold Italic"
      }
    },
  },
  plugins: [],
}

