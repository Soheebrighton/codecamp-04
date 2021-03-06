module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "soymarket",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
