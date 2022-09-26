/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/components/Header.js',
      './src/pages/Home.js',
      './src/pages/ContactDetail.js',
      './src/pages/Message.js',
      './src/pages/MessageDetail.js',
    ],
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  };
  