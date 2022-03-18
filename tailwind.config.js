const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{hmtl,js,jsx}'],
  content: [],
  theme: {
    colors: {
      ...colors,
    },
  },
};
