import React, { ReactNode, createContext, useContext, useState } from 'react'
import useCartContext from './CartContext';
import History from '../components/History';

const HistoryContext = createContext({} as HistoryContext);

type HistoryProviderProps = {
    children: ReactNode;
}

type HistoryItem = {
  id: number;
}

type HistoryContext = {
    historyOpen: () => void
    historyClose: () => void
    //historyItems: () => void;
    //historyItem: HistoryItem[];
    //historyQuantity: number;
    getItems: (id: number) => void
    addItems: (id: number) => void;
    removeItems: (id: number) => void;

}

export default function useHistoryContext() {
  return useContext(HistoryContext);
}

export function HistoryProvider({ children }: HistoryProviderProps){
  const [isOpen, setIsOpen] = useState(false)
  const {cartItems} = useCartContext();
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

  const historyOpen = () => setIsOpen(true)
  const historyClose = () => setIsOpen(false)

  //add items from cart to history menu

  const getItems = (id: number) =>{
      return historyItems.find((item) => item.id === id);
  }

  const addItems = () => {
    
  }

  const removeItems = () => {

  }

  return(
    <HistoryContext.Provider
      value={{historyOpen, historyClose, addItems, removeItems, getItems}}
    >
      { children }
      <History isOpen={isOpen}/>
    </HistoryContext.Provider>
  )
}
