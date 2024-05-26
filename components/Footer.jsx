import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.logoFarsi}`}>  <Image src='/images/logo.png'  height={30} width={113}/></div>
      <div> <p> تلفن پشتیبانی 821111-021  &nbsp; &nbsp;  | &nbsp; &nbsp;     7روز هفته پاسخگوی شما هستیم</p>
      <div className={`${styles.fiveIconesContiner}`}>
        <div className={`${styles.fiveIconesItems}`}>
          <Image   src='/images/expressDelivery.svg' height={56} width={56}/>
          <label htmlFor="">امکان تحویل اکسپرس</label>

        </div>
        <div className={`${styles.fiveIconesItems}`}>
          <Image   src='/images/cashOnDelivery.svg' height={56} width={56}/>
          <label htmlFor="">امکان پرداخت در محل</label>

        </div>
        <div className={`${styles.fiveIconesItems}`}>
          <Image   src='/images/support.svg' height={56} width={56}/>
          <label htmlFor="">7روز هفته 24ساعته</label>

        </div>
        <div className={`${styles.fiveIconesItems}`}>
          <Image   src='/images/daysReturn.svg' height={56} width={56}/>
          <label htmlFor="">هفت روز ضمانت بازگشت کالا</label>

        </div>
        <div className={`${styles.fiveIconesItems}`}>
          <Image   src='/images/originalProducts.svg' height={56} width={56}/>
          <label htmlFor="">ضمانت اصل بودن کالا</label>

        </div>
       
       
      </div>
      </div>
      <div  className={`${styles.lastContainer}`}>

      <Image   src='/images/myketButton.svg' height={50} width={150}/>
      <Image   src='/images/sibAppButton.svg' height={50} width={150}/>
      </div>
    </div>
  )
}

export default Footer