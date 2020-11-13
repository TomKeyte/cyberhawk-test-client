//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "CyberHawk Turbine Monitor";
                return args;
            })
    },

    pluginOptions: {
      s3Deploy: {
        registry: undefined,
        awsProfile: 'default',
        overrideEndpoint: true,
        endpoint: 's3.eu-west-2.amazonaws.com',
        region: 'eu-west-2',
        bucket: 'cyberhawkclient',
        createBucket: false,
        staticHosting: true,
        staticIndexPage: 'index.html',
        staticErrorPage: 'index.html',
        assetPath: 'dist',
        assetMatch: '**',
        deployPath: '/',
        acl: 'public-read',
        pwa: false,
        enableCloudfront: false,
        pluginVersion: '4.0.0-rc3',
        uploadConcurrency: 5
      }
    }
}
