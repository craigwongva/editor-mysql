let knex = require('knex');

module.exports = knex({
        client: 'mysql',
        connection: {
                database: 'DATABASE',
                host: 'HOST',
                password: 'PASSWORD',
                user: 'USER',
                dateStrings: true
        }
});
