import { useContext, useEffect, useState } from "react";
import { WholewebsiteContex } from "../AuthProvider/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import Swal from 'sweetalert2'
const Cart = () => {
          const axiosSecure = useAxios()
          const { user } = useContext(WholewebsiteContex);
          const url = `/cart/${user.email}`
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
          axiosSecure.get(url)
   .then((data) => {
          setProducts(data.data)
   })
  }, [user.email, axiosSecure, url]);

  

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${user.email}/${_id}`)
        .then(() => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
        
      }
    })
        
  }

  return (
    <div className="max-w-7xl mx-auto my-5 p-6">
      {products.length > 0 ? (
        <div className="max-w-6xl p-5 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Event name
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className={`${
                    products.indexOf(product) % 2 === 0
                      ? 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-600'
                  }`}
                >
                  <td className="px-6 py-4">
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Pending
                    </a>
                  </td>
                  <td className="px-6 py-4">{product.productCatagory}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {product.productName}
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={ () => handleDelete(product._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <img
            className="lg:w-[500px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EM_tR25dPXbzZJYgisKI6Lo7GlCQdG7LiFfoU-lD1Zp4MBOCxy3tueTlsp0O3__nwH0&usqp=CAU"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
