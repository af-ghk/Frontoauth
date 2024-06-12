  //FIXME: try to rewrite aliases for absolute import
//import path from 'path'




/** @type {import('next').NextConfig} */

const nextConfig = {
  // for prevent rendering useEffect twice turn it to false!
  reactStrictMode: true,
  publicRuntimeConfig:{
    backendUrl: process.env.BACKEND_URL
  },



  //FIXME: try to rewrite aliases for absolute import
  //webpack: (config,
  //  { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
  //  config.resolve.alias = {
  //    ...config.resolve.alias,
  //    "@": path.resolve(process.cwd())
  //    //'@': path.resolve(process.cwd()),
  //    //'@/components': path.resolve(process.cwd(), 'components'),
  //  }
  //  return config
  //},




};

export default nextConfig;
