module.exports = {
   eslint: {
      ignoreDuringBuilds: true,
   },
   images: {
      domains: ['cdn-icons-png.freepik.com', "img.icons8.com"],
   },

   webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) =>
         rule.test?.test?.('.svg'),
      )

      config.module.rules.push(
         {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
         },
         {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
            use: ['@svgr/webpack'],
         },
      )

      fileLoaderRule.exclude = /\.svg$/i

      return config
   },
   reactStrictMode: false,
   productionBrowserSourceMaps: false
}
