/** @type {import('next').NextConfig} */
const webpack = require('webpack')

const path = require('path')
const { parsed: myEnv } = require('dotenv').config({
  path: path.join(__dirname, 'environment', '.env.local'),
})

const nextConfig = {
  reactStrictMode: true,
  env: myEnv,
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
      type: 'asset',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    })

    return config
  },
}

module.exports = nextConfig
