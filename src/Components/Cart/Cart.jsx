const Cart = () => {
          return (
          <div className="max-w-7xl mx-auto my-5">
           <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
            Category
            </th>
            <th scope="col" className="px-6 py-3">
            Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {products.map((product, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-600'
              }`}
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">{product.color}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>                
          </div>
          );
};

export default Cart;