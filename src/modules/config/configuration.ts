export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  env: process.env.NODE_ENV,
  database: {
    mongoUrl: process.env.MONGO_URL,
  },
});
