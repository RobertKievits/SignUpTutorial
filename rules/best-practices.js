module.exports = {
    rules: {
        // Enforce dot notation whenever possible
        // https://eslint.org/docs/latest/rules/dot-notation
        'dot-notation': 0,

        // require the use of === and !==
        // https://eslint.org/docs/latest/rules/eqeqeq
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // Disallow assignment operators in conditional expressions
        // https://eslint.org/docs/latest/rules/no-cond-assign
        'no-cond-assign': 'error',

        // Disallow the use of console
        // https://eslint.org/docs/latest/rules/no-console
        'no-console': ['error', { allow: ['error', 'info', 'warn'] }],

        // Disallow else blocks after return statements in if statements
        // https://eslint.org/docs/latest/rules/no-else-return
        'no-else-return': 'error',

        // Disallow use of chained assignment expressions
        // https://eslint.org/docs/latest/rules/no-multi-assign
        'no-multi-assign': 'error',

        // Disallow new operators with the String, Number, and Boolean objects
        // https://eslint.org/docs/latest/rules/no-new-wrappers
        'no-new-wrappers': 'error',

        // Disallow reassigning function parameters
        // https://eslint.org/docs/latest/rules/no-param-reassign
        'no-param-reassign': 'error',

        // Disallow dangling underscores in identifiers
        // https://eslint.org/docs/latest/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',

        // Disallow unused expressions
        // An unused expression which has no effect on the state of the program indicates a logic error.
        // https://eslint.org/docs/latest/rules/no-unused-expressions
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true
            }
        ],

        // Disallow unnecessary escape characters
        // https://eslint.org/docs/latest/rules/no-useless-escape
        'no-useless-escape': 'error',

        // Require using arrow functions for callbacks
        // https://eslint.org/docs/latest/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'error',

        // Require spread operators instead of .apply()
        // https://eslint.org/docs/latest/rules/prefer-spread
        'prefer-spread': 'error',

        // Require template literals instead of string concatenation
        // https://eslint.org/docs/latest/rules/prefer-template
        'prefer-template': 'error',

        // Enforce the consistent use of the radix argument when using parseInt()
        // https://eslint.org/docs/latest/rules/radix
        radix: 'error',

        //Enforce consistent brace style for all control statements
        //https://eslint.org/docs/latest/rules/curly
        curly: 'error'
    }
};
