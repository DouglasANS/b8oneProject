import React, { useContext } from 'react'
import styles from '../styles/MenuComponent.module.css'
import { DataContext } from '../context/DataContext'

export default function MenuComponent() {

    const {shoppingCart, wishList, showData} = useContext(DataContext)


    

    function showShoppingCart(){
        console.log(shoppingCart)
    }

    function showWishList(){
        console.log(wishList)
    }

    return (
        <div className={styles.container}>
            <button onClick={showData}>showData</button>
            <button onClick={showWishList}>{wishList.length}Wish List</button>
            <button onClick={showShoppingCart}>{shoppingCart.length}Shopping Cart</button>
        </div>
    )
}
