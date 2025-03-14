// import { useEffect, useState } from "react";
// import axios from "axios";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">📋 Products</h1>
//       <table className="w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-4">Image</th>
//             <th className="p-4">Name</th>
//             <th className="p-4">Category</th>
//             <th className="p-4">Price</th>
//             <th className="p-4">Stock</th>
//             <th className="p-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p) => (
//             <tr key={p._id} className="text-center">
//               <td><img src={p.image} alt={p.name} className="w-16 h-16 mx-auto"/></td>
//               <td>{p.name}</td>
//               <td>{p.category}</td>
//               <td>{p.price} Rwf</td>
//               <td>{p.stock} kg</td>
//               <td>
//                 <button className="bg-yellow-500 px-2 py-1 text-white">✏️</button>
//                 <button className="bg-red-500 px-2 py-1 text-white ml-2">🗑️</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Products;
import React, { useState } from "react";
import "./Products.css"; // Import Products styles

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, image: "🥦", name: "Cabbage", category: "Vegetables", price: "500 Rwf/kg", stock: "100kg" },
    { id: 2, image: "🌽", name: "Maize", category: "Grains", price: "700 Rwf/kg", stock: "200kg" },
    { id: 3, image: "🥛", name: "Milk", category: "Dairy", price: "800 Rwf/liter", stock: "50L" },
  ]);

  const addProduct = () => {
    const newProduct = { id: products.length + 1, image: "🍎", name: "Apple", category: "Fruits", price: "1000 Rwf/kg", stock: "30kg" };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="products">
      <h3>Product List</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.image}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-product-btn" onClick={addProduct}>➕ Add Product</button>
    </div>
  );
};

export default Products;
