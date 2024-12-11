import { Button } from '@/components/atoms/Button';
import CardTitle from '@/components/atoms/CardTitle';


import React from 'react';

const returnOrders = [
  {
    id: "RET1234",
    orderId: "ORD1234",
    itemsCount: 3,
    date: "2024-12-12",
    status: "Pending",
    action: "Process Return",
  },
  {
    id: "RET1235",
    orderId: "ORD1235",
    itemsCount: 2,
    date: "2024-12-10",
    status: "Approved",
    action: "View Details",
  },
  {
    id: "RET1236",
    orderId: "ORD1236",
    itemsCount: 5,
    date: "2024-12-08",
    status: "Rejected",
    action: "Contact Support",
  },
];

const OrderReturn = () => {
  return (
    <div className="p-4">
      <CardTitle className="text-lg lg:text-2xl font-bold mb-4">Order Returns</CardTitle>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Order ID Number</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Items Count</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {returnOrders.map((returnOrder) => (
              <tr key={returnOrder.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{returnOrder.id}</td>
                <td className="border border-gray-300 px-4 py-2">{returnOrder.orderId}</td>
                <td className="border border-gray-300 px-4 py-2">{returnOrder.itemsCount}</td>
                <td className="border border-gray-300 px-4 py-2">{returnOrder.date}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      returnOrder.status === "Approved"
                        ? "bg-green-500"
                        : returnOrder.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {returnOrder.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {returnOrder.action}
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

export default OrderReturn;
