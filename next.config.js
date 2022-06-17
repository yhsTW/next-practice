/**
 * @type {import('next').NextConfig}
 */
const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.resolve(__dirname, 'src', 'styles')],
        prependData: `@import "./variables/index.scss";`
    },
    images: {
        domains: ['localhost:3000', 'img.dummyapi.io']
    },
    webpack: (config) => {
        // camel-case style names from css modules
        config.module.rules
            .find(({ oneOf }) => !!oneOf)
            .oneOf.filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
            .reduce((acc, { use }) => acc.concat(use), [])
            .forEach(({ options }) => {
                if (!options.modules) return;

                options.modules.exportLocalsConvention = 'camelCase';
            });

        return config;
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        APP_ID: process.env.APP_ID
    }
};
