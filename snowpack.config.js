/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/',
  },
  buildOptions: {
    baseUrl: './',
    out:'build/docs',
    metaUrlPath:'snowpack'
  },
}
