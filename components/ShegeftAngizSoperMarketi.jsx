import React from 'react'
import styles from './ShegeftAngizSoperMarketi.module.css'
import { Image } from 'react-bootstrap'

const ShegeftAngizSoperMarketi = () => {



  return ( <div   className={`${styles.container}`}>
    <div className={`${styles.outercontainer}`}>
        <div className={`${styles.leftcontainer}`}>
 <span className={`${styles.sadKala}`}> بیش از 100 کالا</span>
<Image className={`${styles.circleimage}`} src='/images/1.webp' height={74} width={94}/>
<Image className={`${styles.circleimage}`} src='/images/2.webp' height={74} width={94}/>
<Image className={`${styles.circleimage}`} src='/images/3.webp' height={74} width={94}/>
<Image className={`${styles.circleimage}`} src='/images/4.webp' height={74} width={94}/>
<Image className={`${styles.circleimage}`} src='/images/5.webp' height={74} width={94}/>
<Image className={`${styles.circleimage}`} src='/images/6.jpg' height={74} width={94}/>
        </div>
        <div  className={`${styles.rightcontainer}`}>
            <span  className={`${styles.takhfif}`}>تا 36% تخفیف</span>
            <Image className={`${styles.text}`} src='/images/fresh.svg'  height={28} width={250}/>
            <Image src='/images/fresh.webp'  height={66} width={62}/>
        </div>
    </div>
    <div  className={`${styles.bottomContainer}`} >
    <Image className={`${styles.fourimages}`} src='/images/11.jpg'  height={240} width={322}/>
    <Image className={`${styles.fourimages}`} src='/images/22.jpg'  height={240} width={322}/>
    <Image className={`${styles.fourimages}`} src='/images/33.jpg'  height={240} width={322}/>
    <Image className={`${styles.fourimages}`} src='/images/44.jpg'  height={240} width={322}/>
    </div>

<div className={`${styles.barandContainer}`}>
  <h4 className={`${styles.barandTitle}`}>برترین برند ها</h4>
  <div className={`${styles.barandImage}`}>
  <Image className={`${styles.fourimages}`} src='/images/b1.webp'  height={66} width={138}/>
    <Image className={`${styles.fourimages}`} src='/images/b2.jpg'  height={66} width={138}/>
    <Image className={`${styles.fourimages}`} src='/images/b3.webp'  height={66} width={138}/>
    <Image className={`${styles.fourimages}`} src='/images/b4.webp'  height={66} width={138}/>
    <Image className={`${styles.fourimages}`} src='/images/b5.webp'  height={66} width={138}/>
    <Image className={`${styles.fourimages}`} src='/images/b5.webp'  height={66} width={138}/>
    <Image className={`${styles.fourimages}`} src='/images/b6.webp'  height={66} width={138}/>
    <Image className={`${styles.fourimages}`} src='/images/b7.jpg'  height={66} width={138}/>
  </div>
</div>


    <div className={`${styles.lastContainer}`} >
    <Image  src='/images/p1.webp'  height={610} width={305}/>
    <Image src='/images/p2.webp'  height={610} width={305}/>
    <Image  src='/images/p3.webp'  height={610} width={305}/>
    <Image  src='/images/p4.webp'  height={610} width={305}/>
    </div>
    </div>
  )
}

export default ShegeftAngizSoperMarketi