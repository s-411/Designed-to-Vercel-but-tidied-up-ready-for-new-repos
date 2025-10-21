import type { Config } from "tailwindcss"
import mmTailwindTheme from "mm-design-system/config/generated-tailwind-theme"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "../design-system/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      ...mmTailwindTheme,
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
