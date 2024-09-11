import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  addProductToCart: (product: CartProduct) => void;
  getTotalItems: () => number;
  updatedProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProductInCart: (product: CartProduct) => void;
  getSummaryInformation: () => {
    subtotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };
  clearCart : ()=> void
}

export const UseStoreCart = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      getSummaryInformation: () => {
        const { cart } = get();
        const subtotal = cart.reduce(
          (subtotal, product) => product.quantity * product.price + subtotal,
          0
        );
        const tax = subtotal * 0.21;
        const total = subtotal + tax;
        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        return {
          subtotal,
          tax,
          total,
          itemsInCart,
        };
      },

      updatedProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();
        const updateQuantity = cart.map((item) => {
          if (item.id === product.id && item.sizes === product.sizes) {
            return { ...item, quantity: quantity };
          }
          return item;
        });
        set({ cart: updateQuantity });
      },
      removeProductInCart: (product: CartProduct) => {
        const { cart } = get();
        const removeProduct = cart.filter(
          (item) => item.id !== product.id || item.sizes !== product.sizes
        );
        set({ cart: removeProduct });
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
       /*  console.log(cart); */

        const productInCart = cart.some(
          (item) => item.id === product.id && item.sizes === product.sizes
        );
        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.sizes === product.sizes) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });
        set({ cart: updatedCartProducts });
      },

      clearCart:()=>{
        set({cart:[]})
      }
    }),

    {
      name: "shoppingCart",
    }
  )
);
