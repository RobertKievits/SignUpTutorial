const ngParser = require('@angular-eslint/template-parser');
const ngTemplate = require('@angular-eslint/eslint-plugin-template');

module.exports = {
    files: ['**/*.html'],
    plugins: {
        '@angular-eslint/template': ngTemplate
    },
    languageOptions: {
        parser: ngParser
    },
    rules: {
        ...ngTemplate.configs.recommended.rules,
        ...ngTemplate.configs.accessibility.rules
    }
};
