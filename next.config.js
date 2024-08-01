async rewrites() {
    return [
        {
        source: "/blog",
        destination: "https://starter-kit-tau-swart.vercel.app",
        },
        {
        source: "/blog/:path*",
        destination: "hhttps://starter-kit-tau-swart.vercel.app/:path*",
        },
    ];
},