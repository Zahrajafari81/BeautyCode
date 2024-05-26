
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './Topbanner.module.css'
import { GET } from '@/repository/axiosReposirory'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { TbBrandSketch } from "react-icons/tb";
import { IoMenuOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const Topbanner = () => {
  const [TopbannerData, setTopBannerData] = useState({})
  const searchBox = useRef('')
  const router = useRouter()
  const clickHandler = () => {
    router.push(`/products/search/${searchBox.current.value}`)
  }
  useEffect(() => {
   
    GET("/topBanner")
      .then((response) => setTopBannerData(response.data))
  }, [])
  const shoppingCart = useSelector((state) => state.shoppingCart)
  return ( < >
    {/* <div className={`${styles.outerContainer}`}>
      <Image className={`${styles.banner}`} src={TopbannerData.imageUrl} fill />
    </div> */}


<div className={`${styles.mainContainer}`}>


<div className={`${styles.leftmainContainer}`}>
  <Image src='/images/logo.png' width={160} height={40} />
  
</div>
<div  className={`${styles.search}`}>
<input   className={`${styles.searchbox}`} type='text'
 ref={searchBox} 

 /> <sapn  className={`${styles.searchlogo}`}><CiSearch size={30} onClick={clickHandler} color='black'/></sapn>
</div>

<div className={`${styles.rightmainContainer}`}>


  <span className={`${styles.logo}`}>
    
   <span  className={`${styles.leftlogoshoppingCart}`}><Link href='/shoppingCart'><CiShoppingBasket size={40} color='black' />
  
  {shoppingCart.totalCount >0  && (<span className={`${styles.showCountOnShoppingLogo}`}>{shoppingCart.totalCount}</span>)}
  
  
  </Link>  
          
          </span>
  <span className={`${styles.leftlogologin}`}>
  <Link href='/Login'> <CiLogin size={40} color='black'/></Link>
  </span>
  </span>
  </div>

 
</div>

 <div  className={`${styles.buttomContainer}`}>
    <div  className={`${styles.buttomleft}`}>
    <div  className={`${styles.head1}`} ><IoCall  size={20}/> (021)5646999</div>
    </div>
 
    <div className={`${styles.buttomright}`}>
     
       <div  className={`${styles.head1}`}>!فروشنده شوید</div>
      <div  className={`${styles.head1}`}>سوالی دارید؟</div>
      <div  className={`${styles.head1}`} >عطر وادکلن<TbDiscount2 size={15}/></div>
      <div  className={`${styles.head1}`} >پوست<FaFire size={15}/></div>
      <div  className={`${styles.head1}`} >ارایشی<MdCardGiftcard size={15} /></div>
      <div  className={`${styles.head1}`} >برند ها<TbBrandSketch size={15}/> </div>
      <div  className={`${styles.head1}`} >جدیدترین ها<MdOutlineWorkspacePremium size={15}/></div>
     
      {/* <div  className={`${styles.head2}`} >دسته بندی کالاها<IoMenuOutline size={20}/></div> */}
    </div>
   
  </div>









</>
  )
}

export default Topbanner
