import React from 'react'
import Image from "next/image";
import user from "/public/cart/cart.png";
const Profile = () => {
  return (
<div className="flex items-center gap-4 mb-6 pb-4 border-b">
  <div className="w-16 h-16 rounded-full overflow-hidden border">
    <Image
      src={user}
      alt="User Avatar"
      width={64}
      height={64}
      className="object-cover"
    />
  </div>
  <div>
    <h2 className="text-xl font-bold text-gray-800">Hello, Badon</h2>
    <p className="text-sm text-gray-600">Welcome to your account</p>
  </div>
</div>

  )
}

export default Profile