/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: './',
    out:'build/docs',
    metaUrlPath:'snowpack'
  },
}
