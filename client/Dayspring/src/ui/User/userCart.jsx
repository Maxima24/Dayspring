import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deleteFromCart, increaseQuantity, decreaseQuantity } from '../../feautures/cartSlice';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function UserCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { username, role } = user;
  const cartItems = useSelector(state => state.cart.cart);

  const removeFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  const increaseQuantitys = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseQuantitys = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6 space-y-8 text-blue-300 bg-gradient-to-br from-slate-950 to-slate-800 min-h-screen">
      <section className="text-2xl font-semibold border-b border-stone-200 pb-4 flex justify-between">
        <div className="flex gap-2 items-center">
          <Button onClick={() => navigate(`/home/${role}/${username}`)} type={"secondary"}>🔙</Button>
          <h1>Your Cart 🛒</h1>
        </div>
        <Button onClick={() => dispatch(clearCart())} type={"secondary"}>Clear Cart</Button>
      </section>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Cart Items (2/3 width) */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white text-black rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-full md:w-32 object-cover rounded mb-4 md:mb-0"
                />
                <div className="flex-1 md:ml-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => decreaseQuantitys(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => increaseQuantitys(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm mt-4 md:mt-0 md:ml-6"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="bg-white text-black rounded-lg shadow p-4 space-y-4 h-fit">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCart;
