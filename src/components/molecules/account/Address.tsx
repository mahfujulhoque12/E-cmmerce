import { Input } from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Textaria from '@/components/atoms/Textaria';
import {Button} from '@//components/atoms/Button';
import CardTitle from "@//components/atoms/CardTitle";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  address: string;
}

const Address: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    address: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Perform any additional actions such as sending data to the backend
  };

  return (
    <div className="p-6">
      <CardTitle className="text-xl font-bold mb-4">Address Form</CardTitle>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</Label>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="block text-sm font-medium mb-1">Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="state" className="block text-sm font-medium mb-1">State</Label>
          <Input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="city" className="block text-sm font-medium mb-1">City</Label>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="address" className="block text-sm font-medium mb-1">Address</Label>
          <Textaria
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full"
            required
          />
        </div>
        <Button
          type="submit"
            variant="subscribeBtn"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Address;
