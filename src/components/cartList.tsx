"use client";

import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { deleteCart } from "@/app/store/slices/cart";

const CartList = () => {
  const cart = useAppSelector((state) => state.cartArray);
  const dispatch = useAppDispatch();

  return (
    <div>
      {cart.map((val, i) => {
        return (
          <div key={i} className="grid grid-cols-4 gap-4">
            <div>Name :{val.name}</div>
            <div>Catagory :{val.catagory}</div>
            <div>QTY:{val.qty}</div>
            <div>
              <button
                onClick={() => dispatch(deleteCart(val.name))}
                className="bg-red-500 p-2 m-2 rounded-lg"
              >
                Delete Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
