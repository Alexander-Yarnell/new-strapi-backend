module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'af8028f65f8514800bc3e21cadebfe91'),
  },
});
