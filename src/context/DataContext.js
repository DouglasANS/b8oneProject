import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {

  

  const [wishList, setWishList] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])
  





  function showData(){
    console.log('1111')
    console.log('wishList: ',wishList)
    console.log('shoppingCart', shoppingCart)
  }
  
  return (
    <DataContext.Provider
      value={{wishList, setWishList, shoppingCart, setShoppingCart, showData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}