import React, { useState } from 'react'
import styles from '../styles/CardComponent.module.css';

export default function CardComponent() {
       

    
        var description = "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50"
        var oldPrice = "R$ 2.813,99"
        var price = "R$ 2.599,00"
        var installments = "em até 10x de R$ 259,90 sem juros"

        function addProduct(){
        }

        function addFavorite(){
            var checkbox = document.getElementById(styles.favCheckbox)
            checkbox.checked = true
        }
    

    return (
        <div className={styles.container}>
            <input type="checkbox" id={styles.favCheckbox}/>
            <div className={styles.imgProduto} >
                
                <div onClick={addFavorite} className={styles.a}></div>
                <div onClick={addFavorite} className={styles.b}></div>
                
                
            </div>
            <h2 className={styles.description}>{description}</h2>
            <h2 className={styles.oldPrice}>{oldPrice}</h2>
            <h2 className={styles.price}>{price}</h2>
            <h2 className={styles.installments}>{installments}</h2>
            <button className={styles.btnAdicionar} onClick={addProduct} >adicionar</button>
            
            
            
        </div>
    )
    
}
