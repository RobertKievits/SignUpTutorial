const tsParser = require('@typescript-eslint/parser');
const ts = require('@typescript-eslint/eslint-plugin');

module.exports = {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
        '@typescript-eslint': ts
    },
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            project: ['/tsconfig.*?.json']
        }
    },
    rules: {
        ...ts.configs['eslint-recommended'].rules,
        ...ts.configs['recommended'].rules,
        // Enforce naming conventions
        // https://typescript-eslint.io/rules/naming-convention
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase', 'snake_case'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow'
            },
            {
                selector: 'variable',
                modifiers: ['const', 'exported'],
                format: ['UPPER_CASE', 'PascalCase', 'camelCase']
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'enumMember',
                format: ['camelCase', 'UPPER_CASE']
            },
            {
                selector: 'memberLike',
                modifiers: ['private', 'readonly'],
                format: ['camelCase', 'UPPER_CASE']
            },
            {
                selector: 'import',
                format: null
            }
        ],

        // https://typescript-eslint.io/rules/ban-ts-comment/
        '@typescript-eslint/ban-ts-comment': 'off',

        // https://typescript-eslint.io/rules/no-empty-function/
        '@typescript-eslint/no-empty-function': 'off',

        // Allow the any type.
        // https://typescript-eslint.io/rules/no-explicit-any/
        '@typescript-eslint/no-explicit-any': 'off',

        // Note: you must disable the base rule as it can report incorrect errors
        'no-shadow': 'off',

        // Disallow variable declarations from shadowing variables declared in the outer scope
        // https://typescript-eslint.io/rules/no-shadow/
        '@typescript-eslint/no-shadow': 'error'
    }
};
