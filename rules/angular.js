const angularEslintPlugin = require('@angular-eslint/eslint-plugin');

module.exports = {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
        '@angular-eslint': angularEslintPlugin
    },
    rules: {
        ...angularEslintPlugin.configs.recommended.rules,
        '@angular-eslint/directive-class-suffix': [
            'error',
            {
                suffixes: ['Directive', 'Example']
            }
        ],
        '@angular-eslint/component-selector': [
            'warn',
            {
                type: ['attribute', 'element'],
                style: 'kebab-case'
            }
        ],
        '@angular-eslint/directive-selector': [
            'warn',
            {
                type: ['attribute', 'element'],
                style: 'kebab-case'
            }
        ]
    }
};
