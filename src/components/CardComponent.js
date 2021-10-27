import React, { useContext, useState } from 'react'
import styles from '../styles/CardComponent.module.css';
import { DataContext } from '../context/DataContext';

export default function CardComponent(props) {

    const [favorite, setFavorite] = useState(false)
    const [adicionar, setAdicionar] = useState(false)
    const {wishList, setWishList, shoppingCart, setShoppingCart} = useContext(DataContext)

    function filterByProductId(value) {
        return value !== props.id_Product.toString();
    }

    function addProduct(){
        if(adicionar === true){
            var newshoppingCart = shoppingCart.filter(filterByProductId)
            setShoppingCart(newshoppingCart)
            setAdicionar(false)               
        }else{
            setShoppingCart([...shoppingCart, props.id_Product.toString()] )
            setAdicionar(true)
        }
    }

    function addFavorite(){
        if(favorite === true){
            var newWishList = wishList.filter(filterByProductId)
            setWishList(newWishList)
            setFavorite(false)
        }else{
            setWishList([...wishList, props.id_Product.toString()] )
            setFavorite(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgProduto} >
                <img src={props.imgProduct} alt="MonitorCRG50"/>   
                
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

            <div className={styles.infoProduct} >
                <h2 className={styles.description}>{props.description}</h2>
                <h2 className={styles.oldPrice}>{props.oldPrice}</h2>
                <h2 className={styles.price}>{props.price}</h2>
                <h2 className={styles.installments}>{props.installments}</h2>
            </div>
            
            {adicionar ? 
            <button className={styles.btnAdicionado} onClick={addProduct}><div></div><h1>adicionado</h1></button>
            :
            <button className={styles.btnAdicionar} onClick={addProduct}><label id={props.id_Product}></label>adicionar</button> 
            }
            
        </div>
    )    
}
