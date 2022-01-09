module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b6150bc0b23a6fa44b7f10bf6756907'),
  },
});
