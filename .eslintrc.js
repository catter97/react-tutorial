module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "globals": {
    "_": true,
    "moment": true,
  },
  "rules": {
    "no-param-reassign": 0,
    "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "to" ] } ],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 0,
  },
  "settings": {
    "import/resolver": "webpack",
  }
};