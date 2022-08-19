module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    backendUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
  },
};
