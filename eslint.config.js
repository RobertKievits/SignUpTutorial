const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

const eslintConfigAngular = require('./rules/angular');
const eslintConfigBestPractices = require('./rules/best-practices');
const eslintConfigHtml = require('./rules/html');
const eslintConfigImports = require('./rules/imports');
const eslintConfigStyle = require('./rules/style');
const eslintConfigTypescript = require('./rules/typescript');

module.exports = [
    eslintConfigAngular,
    eslintConfigHtml,
    eslintConfigImports,
    eslintConfigStyle,
    eslintConfigTypescript,
    eslintPluginPrettierRecommended,
    eslintConfigBestPractices,
    { ignores: ['node_modules/**', '.angular/**', '.vscode/**', 'coverage/**', 'dist/**', 'playwright-report/**'] }
];
