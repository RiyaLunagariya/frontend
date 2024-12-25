import React, { createContext, useState, useContext } from "react";
import blue from "../../Images/Frame2122550743.png.png";
import pink from "../../Images/Frame2122550743.png (1).png";
import green from "../../Images/Frame2122550743.png (2).png";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: blue,
      title: "Natural Testosterone Booster",
      price: 1499,
      discountPrice: 1899,
      reviews: 134,
      rating: 4.8,
      quantity: 1,
    },
    {
      id: 2,
      image: pink,
      title: "Natural Testosterone Booster",
      price: 1499,
      discountPrice: 1899,
      reviews: 134,
      rating: 4.8,
      quantity: 1,
    },
    {
      id: 3,
      image: green,
      title: "Natural Testosterone Booster",
      price: 1499,
      discountPrice: 1899,
      reviews: 134,
      rating: 4.8,
      quantity: 1,
    },
  ]);

  // Add a product to the cart or increase its quantity if already in the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item already exists, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      // Add the item to the cart with its specified quantity
      return [...prevItems, { ...product }];
    });
  };

  // Remove a product from the cart entirely
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Update the quantity of a product (increment or decrement)
  const updateCartQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };

  // Calculate the subtotal of all items in the cart
  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        calculateSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
