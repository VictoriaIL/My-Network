module.exports = {
  URI: process.env.DB_URL,
  dbName: process.env.DB_NAME,
  options: {
    user: process.env.DB_ADMIN_USERNAME,
    pass: process.env.DB_ADMIN_PASSWORD,
    authSource: 'admin',
  },
};
