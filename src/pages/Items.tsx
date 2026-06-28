import React from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  quantity: string;
  location: string;
  status: "Available" | "Reserved";
  category: string;
}

const sampleItems: Item[] = [
  {
    id: 1,
    name: "Plastic Bottles",
    description: "Clean plastic bottles ready for recycling",
    quantity: "50 units",
    location: "Downtown",
    status: "Available",
    category: "Plastic",
  },
  {
    id: 2,
    name: "Electronic Components",
    description: "Old computer parts and cables",
    quantity: "15 kg",
    location: "Tech District",
    status: "Reserved",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Glass Containers",
    description: "Various glass jars and bottles",
    quantity: "30 units",
    location: "Residential Area",
    status: "Available",
    category: "Glass",
  },
];

const Items: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Items List</h1>
      <p className="text-gray-600 mb-6">
        Browse and manage recyclable items
      </p>

      <input
        type="text"
        placeholder="Search items..."
        className="w-full max-w-lg p-2 border rounded mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl shadow p-5 bg-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p>
                <strong>Location:</strong> {item.location}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {item.status}
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                {item.category}
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Request
              </button>
              <button className="border px-4 py-2 rounded hover:bg-gray-100">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
