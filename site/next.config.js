/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Enclave Information Systems',
    description: 'The Kasm supported workspaces Repo for Enclave Information Systems.',
    icon: '/img/logo.svg',
    listUrl: 'https://enclave-information-systems.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
