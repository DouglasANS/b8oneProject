import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import styles from '../styles/WishListPopupComponent.module.css'
import CardPopupComponent from './CardPopupComponent'

export default function WishListPopupComponent() {

    const {setWishListPopup, data, wishList} = useContext(DataContext)

    function leavePopupWishList(){
        setWishListPopup(false)
    }

    return (
        <div className={styles.containerModal}>
            <div className={styles.contentModal}>
                <div className={styles.cancelButton}>
                    <button className={styles.leaveButton} onClick={leavePopupWishList}> x </button>
                </div>
                <h1 className={styles.title}>Lista de Desejos</h1>
                
                <CardPopupComponent 
                data={data} 
                wishList={wishList}
                />
            </div>
        </div>
    )
}
