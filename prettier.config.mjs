/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 4,
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
