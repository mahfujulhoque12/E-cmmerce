import React, { useState, ChangeEvent, FormEvent } from 'react';
import CardTitle from '@/components/atoms/CardTitle';
import { Input } from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import { Button } from '@/components/atoms/Button';

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type FormErrors = {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

const ChangePassword: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on input change
  };

  const validateForm = (): boolean => {
    const { currentPassword, newPassword, confirmPassword } = formData;
    const newErrors: FormErrors = {};

    if (!currentPassword) newErrors.currentPassword = 'Current password is required.';
    if (!newPassword) newErrors.newPassword = 'New password is required.';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your new password.';
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform the password change logic here (e.g., API call)
      console.log('Password change request:', formData);

      // Reset the form after successful submission
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });

      alert('Password updated successfully!');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <CardTitle className="text-lg lg:text-2xl font-bold mb-4">Change Password</CardTitle>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password</Label>
          <Input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
            className={errors.currentPassword ? 'border-red-500' : ''}
          />
          {errors.currentPassword && <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>}
        </div>

        <div className="mt-4">
          <Label htmlFor="newPassword" className="block text-sm font-medium mb-1">New Password</Label>
          <Input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
            className={errors.newPassword ? 'border-red-500' : ''}
          />
          {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>}
        </div>

        <div className="mt-4">
          <Label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className={errors.confirmPassword ? 'border-red-500' : ''}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <div className="mt-6">
          <Button
            type="submit"
            variant="subscribeBtn"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;