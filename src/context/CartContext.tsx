import { type } from "os";
import React, { useContext, createContext, ReactNode, useState } from "react";

const CartContext = createContext({});
type CartProviderProps = {
    children: ReactNode;
};

type CartItem = {
    id: number;
    quantity: number;
};

type CartContext = {
    getItems: (id: number) => number;
    increaseItems: (id: number) => void;
    decreaseItems: (id: number) => void;
    removeItems: (id: number) => void;
};

export default function useCartContext() {
    return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const getItems = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseItems = (id: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseItems = (id: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeItems = (id: number, quantity: number) => {
        setCartItems((currItem) => {
            return currItem.filter((item) => item.id !== id);
        });
    };

    return (
        <CartContext.Provider
            value={{ getItems, increaseItems, decreaseItems, removeItems }}
        >
            {children}
        </CartContext.Provider>
    );
}
