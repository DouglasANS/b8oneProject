import React, { useState } from 'react'
import styles from '../styles/CardComponent.module.css';

export default class CardComponent extends React.Component {
       

    render() {
        var description = "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50"
        var oldPrice = "R$ 2.813,99"
        var price = "R$ 2.599,00"
        var installments = "em até 10x de R$ 259,90 sem juros"

        var  abox = document.getElementById(styles.aaa)
        
        console.log(abox)
        function addProduct(){
            console.log(abox)
            //abox.classList.toggle("add-favorites")
        }
    

    return (
        <div className={styles.container}>
            <div className={styles.imgProduto} >
                <div id={styles.aaa} ></div>
                <div ></div>
            </div>
            <h2 className={styles.description}>{description}</h2>
            <h2 className={styles.oldPrice}>{oldPrice}</h2>
            <h2 className={styles.price}>{price}</h2>
            <h2 className={styles.installments}>{installments}</h2>
            <button className={styles.btnAdicionar} onClick={addProduct} >adicionar</button>
           
        </div>
    )
    }
}
