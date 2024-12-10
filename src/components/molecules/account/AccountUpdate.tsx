import React from 'react'
import { Button } from "@/components/atoms/Button";
import CardTitle from "@/components/atoms/CardTitle";
import Label from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
const AccountUpdate = () => {
  return (
    <div>
    <CardTitle  className="text-lg lg:text-2xl font-bold mb-4">Update Profile</CardTitle>
    {/* Form */}
    <form className="space-y-4">
      {/* Full Name */}
      <div>
        <Label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </Label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          className="mt-1"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email */}
      <div>
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          className="mt-1"
          placeholder="Enter your email"
        />
      </div>

      {/* Date of Birth */}
      <div>
        <Label
          htmlFor="dob"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </Label>
        <Input
          type="date"
          id="dob"
          name="dob"
          className="mt-1"
        />
      </div>

      {/* Phone */}
      <div>
        <Label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Update Button */}
      <Button
        type="submit"
        variant="subscribeBtn"
      >
        Update Profile
      </Button>
    </form>
  </div>
  )
}

export default AccountUpdate