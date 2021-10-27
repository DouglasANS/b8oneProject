import React, { useContext } from 'react'
import styles from '../styles/MenuComponent.module.css'
import { DataContext } from '../context/DataContext'

export default function MenuComponent() {

    const {
        shoppingCart, 
        wishList,
        setShoppingCartPopup, 
        setWishListPopup,
        } = useContext(DataContext)

    function showShoppingCart(){
        setShoppingCartPopup(true)
    }

    function showWishList(){
        setWishListPopup(true)
    }

    return (
        <div className={styles.container}>
            <button className={styles.popupButtonWishList}  onClick={showWishList}>{wishList.length} - Lista de Desejos</button>
            <button className={styles.popupButtonShoppingCart} onClick={showShoppingCart}>{shoppingCart.length} - Carrinho de compras</button>
        </div>
    )
}
