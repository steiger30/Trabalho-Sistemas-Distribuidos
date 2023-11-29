/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "my-value",
    API_URL: "http://localhost:4200/api/v1/",
  },
};

module.exports = nextConfig;
