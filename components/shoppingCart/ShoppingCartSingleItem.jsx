import React from 'react'
import styles from './ShoppingCartSingleItem.module.css'
import Image from 'next/image'
import ChangeCounter from '../Buttons/ChangeCounter'
const ShoppingCartSingleItem = ({product}) => {
    // const testii=localStorage.getItem("globalStorage")





  return ( 
<div className={`${styles.container}`}>
  <div  className={`${styles.rightContainer}`}>
    <div className={`${styles.singleItem}`}>
    
      <span className={`${styles.imageItem}`}>
      <Image src={product.indexImageUrl}  height={100} width={100}/>
      </span>
     <div className={`${styles.Item}`}> <h6 className={`${styles.titleItem}`}>{product.name}</h6>
     <div className={`${styles.counterAndprice}`}>
      <span className={`${styles.countrItem}`}> <ChangeCounter  productId={product.id}/></span>
      {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
      </div>
      </div>

    </div>
  </div>

</div>

  )
}

export default ShoppingCartSingleItem