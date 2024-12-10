import React from 'react'
import CardTitle from "@/components/atoms/CardTitle";
import Paragraph from "@/components/atoms/Paragraph";

const AccountInfo = () => {
  return (
    <div>
    <CardTitle className="lg:text-2xl font-bold mb-4">Account Info</CardTitle>
    <Paragraph className="text-base lg:text-lg text-gray-700"><b>Name:</b> Badon</Paragraph>
    <Paragraph className="text-base lg:text-lg text-gray-700"><b>Email:</b> badon@example.com</Paragraph>
    <Paragraph className="text-base lg:text-lg text-gray-700"><b>Phone:</b> +123456789</Paragraph>
  </div>
  )
}

export default AccountInfo