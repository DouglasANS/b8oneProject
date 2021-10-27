import React from 'react'
import styles from '../styles/CardPopupComponent.module.css'

export default function CardPopupComponent(props) {
    return (
        <div>
            { props.data.produtos.map((val)=>{ 
                        if(props.wishList.includes(val.id_Product)){
                            return(
                                <div className={styles.container}> 
                                    <h1 className={styles.description}>{val.description}</h1>
                                    <h1 className={styles.price}>{val.price}</h1>
                                </div>
                            )
                        }else{
                            return(
                                <div>
                                    
                                </div>
                            )
                        }
                    })
                }
            
            
        </div>
    )
}
