import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartSingleItem from './ShoppingCartSingleItem'
import Image from 'next/image'
import styles from './ShoppingCartItems.module.css'

const ShoppingCartItems = () => {
   const shoppingCart= useSelector((state)=>state.shoppingCart)
   if(shoppingCart.totalCount ===0)
   {
    return (
        <div className={`${styles.outerContainer}`}>
          <Image  src='/images/empty-cart.svg' height={150} width={200}/>
          <h3>سبد خرید شما خالی است</h3>
        </div>
        
    )
   }
  return (
    <div>
        {
           shoppingCart.items.map((item)=>{
           return <ShoppingCartSingleItem  product={item}/>})
        }
    </div>
  )
}

export default ShoppingCartItems