import Image from 'next/image'
import React, { useContext } from 'react'
import styles from './SevenIcons.module.css'
import context from '@/context/Context'
import Link from 'next/link'

const SevenIcons = ({products}) => {
 
    return (
 <div className={`${styles.outerContainer}`}>
   {
products.map((item) => {
        return <Link href={`/products/category/${item.url}`}> <div className={`${styles.itemContainer}`}>
                        <Image src={`/images/${item.iconName}`} width={150}
                            height={130} />
                            <label className={`${styles.lable}`}>{item.label}</label>
                    </div>
                    </Link>
                })
            }
        </div>

    )
}

export default SevenIcons