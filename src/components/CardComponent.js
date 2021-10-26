import React, { useState } from 'react'
import styles from '../styles/CardComponent.module.css';

export default function CardComponent(props) {

        const [favorite, setFavorite] = useState(false)
        const [adicionar, setAdicionar] = useState(false)
       


        function addProduct(){
            if(adicionar === true){
                setAdicionar(false)
                
            }else{
                setAdicionar(true)
                console.log('prodito com id: ', props.id_Product ,'adicionado')
            }
            
        }

        function addFavorite(){
            if(favorite === true){
                setFavorite(false)
            }else{
                setFavorite(true)
            }
            
            
        }
    

    return (
        <div className={styles.container}>
            <div className={styles.imgProduto} >
                <img src="./monitor.png" alt="MonitorCRG50"/>   

                {favorite ?
                <>
                    <button onClick={addFavorite} className={styles.btn_Favorite_Wishlist}><div></div></button>
                </>
                : 
                <>
                    <button onClick={addFavorite} className={styles.btn_Favorite_Default}><div></div></button>
                </>
                } 
 
            </div>
            
            <h2 className={styles.description}>{props.description}</h2>
            <h2 className={styles.oldPrice}>{props.oldPrice}</h2>
            <h2 className={styles.price}>{props.price}</h2>
            <h2 className={styles.installments}>{props.installments}</h2>
            {adicionar ? 
            <button className={styles.btnAdicionado} onClick={addProduct}><div></div>adicionado</button>
            :
            <button className={styles.btnAdicionar} onClick={addProduct}>adicionar</button> 
            }
            
        </div>
    )
    
}
