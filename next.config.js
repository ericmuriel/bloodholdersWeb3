module.exports = {
  restrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/bloodholders/image/upload/',
    domains: [
      "preview.redd.it",
      "media-exp1.licdn.com",
      "sierrablockgames.es",
      "yt3.ggpht.com",
      "www.ifema.es",
      'res.cloudinary.com'
    ],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXT_PUBLIC_PRIVATE_KEY: 'f8fea2f28f1d187b47844609c5809798253cd3121028d9c2f7b01d73f4010da1',
  },
};
