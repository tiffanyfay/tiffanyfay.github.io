async rewrites() {
    return [
        {
        source: "/blog",
        destination: "https://starter-kit-tau-swart.vercel.app/blog",
        },
        {
        source: "/blog/:path*",
        destination: "hhttps://starter-kit-tau-swart.vercel.app/blog/:path*",
        },
    ];
},
