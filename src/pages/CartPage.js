import { useCart } from "../context/CartContext";

export const CartPage = () => {
  const { removeFromCart, totalPrice, cartList } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Cart Items: {cartList.length} / Total Price: Tsh{totalPrice}
      </h1>

      {cartList.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-4 border-b py-4"
        >
          <img
            className="w-24 h-24 object-cover rounded"
            src={product.image}
            alt={product.name}
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {product.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {product.description}
            </p>
            <span className="text-md font-bold text-gray-900 dark:text-white block mt-2">
              Tsh{product.price}
            </span>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(product)}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

