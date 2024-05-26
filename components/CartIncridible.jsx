import React from 'react'

import Image from 'next/image'
import styles from './CartIncridible.module.css'
import Link from 'next/link'
const CartIncridible = () => {
  return (
    <div className={`${styles.OuterContainer}`}>

    <Image  src='/images/shegeft.png'  width={200} height={80} />
    <Link  className={`${styles.moshahedehHame}`} href='/allProducts'>مشاهده همه</Link>
  </div>
  )
}

export default CartIncridible