const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginUnusedImports = require('eslint-plugin-unused-imports');

module.exports = {
    plugins: {
        import: eslintPluginImport,
        'unused-imports': eslintPluginUnusedImports
    },
    languageOptions: {
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            project: ['tsconfig.*?.json']
        }
    },
    settings: {
        'import/internal-regex': '^@/'
    },
    rules: {
        // Enforce a convention in the order of require() / import statements.
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: '{cucumber,jest,sinon,@ng-apimock/**}',
                        group: 'internal',
                        position: 'before'
                    },
                    {
                        pattern: '{@angular/**,rxjs/**,rxjs}',
                        group: 'internal',
                        position: 'before'
                    }
                ],
                pathGroupsExcludedImportTypes: ['builtin']
            }
        ],

        // Disallow unused imports
        // https://github.com/sweepline/eslint-plugin-unused-imports
        'unused-imports/no-unused-imports': 'error'
    }
};
