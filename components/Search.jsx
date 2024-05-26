import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from './Search.module.css'
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link'
import { useSelector } from 'react-redux'
const Search = () => {
  const searchBox = useRef('')
  const router = useRouter()
  const clickHandler = () => {
    router.push(`/products/search/${searchBox.current.value}`)
  }
  const shoppingCart = useSelector((state) => state.shoppingCart)



  return (
    <div className={`${styles.outercontainer}`}>


      <div className={`${styles.rightcontainer}`}>

        {/* <div ><input className={`${styles.searchbox}`} type='text' ref={searchBox} placeholder='search' />
          <button onClick={clickHandler}>search</button></div> */}


          
        {/* <div className={`${styles.logo}`} >
          <Image src='./images/logo.svg' width={120} height={100} /></div> */}
      </div>
      <Link href='/shoppingCart'>
        <div className={`${styles.leftcontainer}`}>
          <FiShoppingCart />
          <lable  className={`${styles.showCountOnShoppingLogo}`}>
            {

              (shoppingCart.totalCount !== 0) ? shoppingCart.totalCount
                : null
            }
          </lable>
        </div>
      </Link>
    </div>
  )
}

export default Search