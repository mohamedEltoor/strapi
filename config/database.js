// module.exports = ({ env }) => ({
//     connection: {
//         client: 'postgres',
//         connection: {
//             connectionString: env('DATABASE_URL')
//         },
//         debug: true,
//         pool: { min: 0, max: 7 },
//     }
// });


module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  },
});
