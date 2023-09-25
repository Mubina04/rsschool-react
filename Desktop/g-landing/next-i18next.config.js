const path = require("path");

module.exports = {
  i18n: {
    locales: ["uz", "ru"],
    defaultLocale: "ru", // default locale will fallback to 'en',
    localeDetection: true,
    localePath: path.resolve("./public/locales"),
  },
};
