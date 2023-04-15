/** @type {import('next').NextConfig} */

const rewrites =
[
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "devslives.com"
        }
      ],
      "destination": "/podcast/:path*"
    }
  ]


const nextConfig = {
  reactStrictMode: true,
  rewrites
}

module.exports = nextConfig
