/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        woodsmoke: "#101111",
        mystic: "#EBF0F2",
        black_squeezes: "#F3F8FA",
        science_blue: "#0073DD",
        rolling_stone: "#76787D",
        red: "#FF0000",
        catskill_white: "#EFF4F7",
        comet: "#5E6275",
        haiti: "#0B0F27",
        light_blue: "#0463BB",
        active_color: "#0158A8",
        Disclosuer_bgcolor: "#E9EEF0",
        Button_hover: "#FFE7E7",
        turbo: "#FFEB00",
        emerald: "#49C86D",
        picton_blue: "#67C2F5",
        pastel_green: "#57E07D",
        rolling_stone: "#76787D",
        light_red: "#EA0400",
        input_border: "#C0CCCC",
        mountain_meadow:"#22C38E"
      },
      fontFamily: {
        Righteous: ['Righteous', 'cursive'],
        Frijole: ['Frijole', 'cursive'],
        LuckiestGuy: ['Luckiest Guy', 'cursive'],
        Mulish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        box_shadow: '10px 10px 20px rgba(0, 0, 0, 0.25)',
        small_shadow: '4px 4px 4px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  plugins: [],
};
