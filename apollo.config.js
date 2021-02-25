module.exports = {
    client: {
        includes: ['src/apollo/**/*.ts'],
        excludes: ['node_modules/*'],
        tagName: 'gql',
        service: {
            name: 'noterity',
            url: 'http://localhost:4000/graphql',
        },
    },
};
