import React from 'react'
import Carusel from '@/components/Carusel'
import styles from './Incedibleoffers.module.css'
import Image from 'next/image'
import CartIncridible from './CartIncridible'
const Incedibleoffers = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.carouselContainer}`}>
        <Carusel cardsCount={5}  data={props.data} />
        </div>
       {/* <CartIncridible /> */}
    </div>
  )
}

export default Incedibleoffers