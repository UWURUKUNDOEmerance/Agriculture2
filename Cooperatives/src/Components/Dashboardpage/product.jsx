import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📋 Products</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">Image</th>
            <th className="p-4">Name</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="text-center">
              <td><img src={p.image} alt={p.name} className="w-16 h-16 mx-auto"/></td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price} Rwf</td>
              <td>{p.stock} kg</td>
              <td>
                <button className="bg-yellow-500 px-2 py-1 text-white">✏️</button>
                <button className="bg-red-500 px-2 py-1 text-white ml-2">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
