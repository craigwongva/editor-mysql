let knex = require('knex');

module.exports = knex({
        client: 'mysql',
        connection: {
                database: 'editordb',
                host: 'HOST',
                user: 'editoruser',
                password: 'editorpassword',
                dateStrings: true
        }
});
