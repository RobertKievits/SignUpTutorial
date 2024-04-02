const stylisticJs = require('@stylistic/eslint-plugin-js');

module.exports = {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
        '@stylistic/js': stylisticJs
    },
    rules: {
        // Disallows spaces inside array brackets
        // https://eslint.style/rules/js/array-bracket-spacing
        '@stylistic/js/array-bracket-spacing': 'error',

        // Enforces parentheses around arrow function parameters
        // https://eslint.style/rules/js/arrow-parens
        '@stylistic/js/arrow-parens': ['error', 'always'],

        // Style of spacing before/after an arrow function's arrow
        // https://eslint.style/rules/js/arrow-spacing
        '@stylistic/js/arrow-spacing': 'error',

        // Enforces consistent brace style for blocks.
        // https://eslint.style/rules/js/brace-style
        '@stylistic/js/brace-style': 'error',

        // Should not use dangling commas
        // https://eslint.style/rules/js/comma-dangle
        '@stylistic/js/comma-dangle': ['error', 'never'],

        // Enforce consistent comma style in array literals, object literals, and variable declarations
        // https://eslint.style/rules/js/comma-style
        '@stylistic/js/comma-style': ['error', 'last'],

        // Disallow spaces between computed properties
        // https://eslint.style/rules/js/computed-property-spacing
        '@stylistic/js/computed-property-spacing': 'error',

        // Requires consistent usage of line breaks between arguments
        // https://eslint.style/rules/js/function-call-argument-newline
        '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],

        // Disallow spacing between function identifiers and their invocations
        // https://eslint.style/rules/js/func-call-spacing
        '@stylistic/js/func-call-spacing': 'error',

        // Disallow spacing around the colon in object literal properties
        // https://eslint.style/rules/js/key-spacing
        '@stylistic/js/key-spacing': 'error',

        // Enforce spacing around keywords
        // https://eslint.style/rules/js/keyword-spacing
        '@stylistic/js/keyword-spacing': ['error'],

        // Enforce a maximum line length
        // https://eslint.style/rules/js/max-len
        '@stylistic/js/max-len': [
            'error',
            {
                code: 140,
                ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],

        // https://eslint.style/rules/js/no-multiple-empty-lines
        '@stylistic/js/no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1
            }
        ],

        // Disallow whitespace before properties
        // https://eslint.style/rules/js/no-whitespace-before-property
        '@stylistic/js/no-whitespace-before-property': 'error',

        // Enforce the location of single-line statements
        // https://eslint.style/rules/js/nonblock-statement-body-position
        '@stylistic/js/nonblock-statement-body-position': 'error',

        // Requires spacing inside of braces
        // https://eslint.style/rules/js/object-curly-spacing
        '@stylistic/js/object-curly-spacing': ['error', 'always'],

        // Disallows padded blocks
        // https://eslint.style/rules/js/padded-blocks
        '@stylistic/js/padded-blocks': ['error', 'never'],

        // Require spacing before blocks
        // https://eslint.style/rules/js/space-before-blocks
        '@stylistic/js/space-before-blocks': ['error', 'always'],

        // Enforces zero spaces inside of parentheses
        // https://eslint.style/rules/js/space-in-parens
        '@stylistic/js/space-in-parens': 'error',

        // Require spaces around operators
        // https://eslint.style/rules/js/space-infix-ops
        '@stylistic/js/space-infix-ops': 'error',

        // Disallows spaces inside of the curly brace pair.
        // https://eslint.style/rules/js/template-curly-spacing
        '@stylistic/js/template-curly-spacing': 'error'
    }
};
