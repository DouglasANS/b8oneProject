import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import styles from '../styles/ShoppingCartPopupComponent.module.css'
import CardPopupComponent from './CardPopupComponent'

export default function ShoppingCartPopupComponent() {

    const {
        setShoppingCartPopup, 
        data, 
        shoppingCart} = useContext(DataContext)

    function leavePopupShoppingCart(){
        setShoppingCartPopup(false)
    }

    return (
        <div className={styles.containerModal}>
            <div className={styles.contentModal}>
                <div className={styles.cancelButton}>
                    <button className={styles.leaveButton} onClick={leavePopupShoppingCart}> x </button>
                </div>
                <h1 className={styles.title}>Carrinho de compras</h1>

                <CardPopupComponent 
                data={data} 
                typePopup={shoppingCart}
                />
            </div>
        </div>
    )
}
