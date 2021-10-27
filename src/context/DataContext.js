import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {

  
  const data = {
    "produtos": [
      {
       "id_Product": "1",
       "imgProduct":  "./monitor.png",
       "description": "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
       "oldPrice": "R$ 2.813,99",
       "price": "R$ 2.599,00",
       "installments": "em até 10x de R$ 259,90 sem juros",
      },
      {
       "id_Product": "2",
       "imgProduct":  "https://m.media-amazon.com/images/I/71-k3QMxzuS._AC_SX679_.jpg",
       "description": "Monitor HDMI 19.5 Intel Core i5 8GB HD 500GB SSD 120GB Geforce GT 730 2GB Quantum XTX",
       "oldPrice": "R$ 3.579,99",
       "price": "R$ 3.199,99",
       "installments": "em até 10x de R$ 358,08 sem juros",
      },
      {
       "id_Product": "3",
       "imgProduct":  "https://m.media-amazon.com/images/I/516zR3ejFRS._AC_SX679_.jpg",
       "description": "Celular Motorola Moto G30 Preto 128gb Tela 6.5 4gb Ram Camera 64mp 8mp 2mp 2mp",
       "oldPrice": "R$ 1.399,90",
       "price": "R$ 1.199,90",
       "installments": "em até 10x de R$ 139,99 sem juros",
      },
      {
       "id_Product": "4",
       "imgProduct":  "https://m.media-amazon.com/images/I/61FiopIfrAL._AC_SX679_.jpg",
       "description": "Cadeira para Escritório Giratória com apoio para os pés - Preta - LMS-BY-8436-T3 - Preta",
       "oldPrice": "R$ 1.176,89",
       "price": "R$ 1.099,89",
       "installments": "em até 10x de R$ 117,77 sem juros",
      },
      {
       "id_Product": "5",
       "imgProduct":  "https://m.media-amazon.com/images/I/81WD5aE1bDL._AC_SX522_.jpg",
       "description": "Multilaser HO041 - Aspirador de Pó Robô Varre + Aspira + Passa Pano Bivolt com 30W e Bateria Recarregável, Vermelho/Preto",
       "oldPrice": "R$  383,63",
       "price": "R$  329,99",
       "installments": "em até 10x de R$ 38,99  sem juros",
      },
      {
       "id_Product": "6",
       "imgProduct":  "https://m.media-amazon.com/images/I/81ndhxmbZgL._AC_SL1500_.jpg",
       "description": "Placa de video asus geforce gtx 1650 tuf gaming oc edition 4gb ddr6 128 bits -tuf-gtx1650-o4gd6-gami",
       "oldPrice": "R$ 2.499,00",
       "price": "R$ 2.199,00",
       "installments": "em até 10x de R$ 249,90 sem juros",
      },
      {
       "id_Product": "7",
       "imgProduct":  " https://m.media-amazon.com/images/I/811-0kItnvL._AC_SX679_.jpg",
       "description": "SteelSeries Teclado mecânico compacto para jogos Apex 7 TKL – tela inteligente OLED",
       "oldPrice": "R$ 933,16",
       "price": "R$ 899,16",
       "installments": "em até 10x de R$ 93,37 sem juros",
      }
      ,
      {
       "id_Product": "8",
       "imgProduct":  "https://m.media-amazon.com/images/I/51jHZfqCoEL._AC_SX522_.jpg",
       "description": "Suporte Articulado de Mesa com Pistão a Gás e Ajuste de Altura para 2 Monitores de 17” a 27” - F160N",
       "oldPrice": "R$ 449,00",
       "price": "R$ 349,00",
       "installments": "em até 10x de R$ 44,90 sem juros",
      }
    ]
 }



  const [wishList, setWishList] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  const [wishListPopup, setWishListPopup] = useState(false)
  const [shoppingCartPopup, setShoppingCartPopup] = useState(false)
  

  function showData(){
    console.log('wishList: ',wishList)
    console.log('shoppingCart', shoppingCart)
  }
  
  return (
    <DataContext.Provider
      value={{
        wishList, 
        setWishList, 
        shoppingCart, 
        setShoppingCart, 
        showData, 
        data, 
        shoppingCartPopup,
        wishListPopup,
        setShoppingCartPopup,
        setWishListPopup
      }}
    >
      {children}
    </DataContext.Provider>
  );
}