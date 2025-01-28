// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust this if needed
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Adjusts the spinning speed to 3 seconds per rotation
      },
    },
  },
  plugins: [],
}
