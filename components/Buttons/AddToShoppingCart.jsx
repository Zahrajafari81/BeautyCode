import React from 'react'
import styles from './AddToShoppingCart.module.css'
import { addNewItem } from '@/redux/features/shopping/ShoppingCartSlice'
import { useDispatch } from 'react-redux'

const AddToShoppingCart = ({ product }) => {
    
    const dispatch = useDispatch()
    const clickHAndler = () => {
        dispatch(addNewItem(product));
    }
    return (
        <div className={`${styles.outerContainer}`}>
            <span onClick={clickHAndler}>افزودن به سبد خرید</span>
        </div>
    )
}

export default AddToShoppingCart