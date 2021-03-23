module.exports = {
    env: {
        API_URL: process.env.API_URL,
        IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    },
    images: {
        deviveSizes: [640, 480, 1024, 1280, 1600],
        imageSizes: [16, 32, 48, 64, 96],
        domains: [process.env.IMAGES_DOMAIN]
    },
}