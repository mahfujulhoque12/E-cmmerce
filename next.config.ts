/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: ["sydneylimousineservice.com"], // Add the external domain here
//   },
// };

// module.exports = nextConfig;

// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },
};

export default nextConfig;

// <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols- justify-center gap-4">
// <div className="h-[279px]">
//   <Image
//     src={ourLatestFlightDealsCardImg4}
//     alt="images-3"
//     className="w-full h-full object-cover rounded-2xl"
//     width={500}
//     height={500}
//   />
// </div>
// <div className="h-[279px]">
//   <Image
//     src={ourLatestFlightDealsCardImg5}
//     alt="images-3"
//     className="w-full h-full object-cover rounded-2xl"
//     width={500}
//     height={500}
//   />
// </div>
// <div className="h-[279px] col-span-1 sm:col-span-2">
//   <Image
//     src={ourLatestFlightDealsCardImg8}
//     alt="images-3"
//     className="w-full h-full object-cover rounded-2xl"
//     width={500}
//     height={500}
//   />
// </div>
// </div>
