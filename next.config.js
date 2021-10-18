module.exports = {
  images: {
    // domains: ['links.papareact.com']
  },

  //this is to stop 'Module not found: Can't resolve 'tls',etc error
  webpack: (config, { isServer }) => {
    if (!isServer) {
         config.resolve.fallback.fs = false
         config.resolve.fallback.dns = false
         config.resolve.fallback.net = false
         config.resolve.fallback.tls = false
         config.resolve.fallback.http2 = false

    }

    return config;
  }

}
