module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "rules": {
        "semi": [
            "error",
            "always",
            { "omitLastInOneLineBlock": true }
        ],
        "comma-dangle": ["warn", "always-multiline"],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "linebreak-style": ["error", "unix"],
        "quotes": ["warn", "single"],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "indent": [
            "error",
            "tab",
            { "SwitchCase": 1 }
        ],
        "no-unused-vars": [
            "error",
            { "vars": "all", "args": "none" }
        ],
        "no-empty": [
            "error",
            { "allowEmptyCatch": true }
        ],
        "no-multiple-empty-lines": [
            "error",
            { max: 1, maxEOF: 0 }
        ],
        "eqeqeq": ['error', 'always'],
        "key-spacing": ["error"],
        "keyword-spacing": [
            "error",
            { "before": true, "after": true }
        ],
        "quote-props": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "no-console": [
            "warn",
            { allow: ["warn", "error"] }
        ]
    }
};
