import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import AddToShoppingCart from './Buttons/AddToShoppingCart'
import { useSelector } from 'react-redux'
import ChangeCounter from './Buttons/ChangeCounter'

const Card = ({product}) => {
  const shoppingCart=useSelector((state)=>state.shoppingCart)
  return (
    <div className={styles.mainContainer}>
        <div className={`${styles.incredibleOfferImageContainer}`}>
        {/* {
          product.incredibleOffers === true ? : null
        } */}
        </div>
        <p align="justify" className={`${styles.productName}`}> {product.name.substring(0, 25)}{product.name.length > 25 ? "..." : null}</p>
       
                <Image alt={product.name} src={product.indexImageUrl} width={200} height={200} />
                {product.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
          </div>
        ) : (
          <div className={`${styles.priceDetail}`}>
            <div className={`${styles.priceContainer}`}>
              <div className={`${styles.priceBeforeOff}`}>
                {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
              <div>
                {product.priceWithDiscount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </div>
            </div>
            <label className={`${styles.offPrcent}`}>
              {Math.floor(
                ((product.price - product.priceWithDiscount) / product.price) * 100
              )}
              %
            </label>

          </div>

        )}
        { shoppingCart.items.find((item)=>item.id===product.id)
        ? (<ChangeCounter productId={product.id} />)
         : product.stock !==0 ?
       <AddToShoppingCart  product={product}/>
       : <span>ناموجود</span>
      }
    </div>
  )
}

export default Card