import { Button } from '@/components/atoms/Button';
import CardTitle from '@/components/atoms/CardTitle';
import React from 'react';

const orders = [
  {
    id: "ORD1234",
    date: "2024-12-10",
    total: "$250.00",
    status: "Delivered",
    action: "View Details",
  },
  {
    id: "ORD1235",
    date: "2024-12-08",
    total: "$150.00",
    status: "In Transit",
    action: "Track Order",
  },
  {
    id: "ORD1236",
    date: "2024-12-05",
    total: "$320.00",
    status: "Pending",
    action: "Cancel Order",
  },
];

const AccountOrders = () => {
  return (
    <div className="p-4">
      <CardTitle className="text-lg lg:text-2xl font-bold mb-4">My Orders</CardTitle>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{order.id}</td>
                <td className="border border-gray-300 px-4 py-2">{order.date}</td>
                <td className="border border-gray-300 px-4 py-2">{order.total}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : order.status === "In Transit"
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {order.action}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountOrders;
