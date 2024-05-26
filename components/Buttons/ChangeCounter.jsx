import { decreaseCount, increaseCount, removeItems } from '@/redux/features/shopping/ShoppingCartSlice';
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import styles from './ChangeCounter.module.css'
import { PiPlusSquareThin } from "react-icons/pi";
import { CiSquareMinus } from "react-icons/ci";;

const ChangeCounter = ({ productId }) => {
  const disptch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const itemCount = shoppingCart.items.filter((item) => item.id === productId)[0].count


  return (
    <div className={`${styles.outerContainer}`}>
      <span onClick={() => disptch(increaseCount(productId))}><PiPlusSquareThin color='gray' size={30}/> </span>
      <span>{itemCount}</span>
      {itemCount === 1 
       ? (<FaRegTrashAlt color='gray' size={23} onClick={() => { disptch(removeItems(productId)) }} />)
        : (<span onClick={() => { disptch(decreaseCount(productId)) }}><CiSquareMinus  color='gray' size={30}/></span>)
      }
    </div>
  )
}

export default ChangeCounter