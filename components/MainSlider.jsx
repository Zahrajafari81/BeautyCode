import React, { useContext } from 'react'
import styles from './MainSlider.module.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import context from '@/context/Context'
import ReactImageGallery from 'react-image-gallery'
const MainSlider = () => {
  const { mainSliderImages} = useContext(context)
  console.log(mainSliderImages)
  return (
    <div className={`${styles.slider}`}>
        <ReactImageGallery
        key={new Date()}
        autoPlay={true}
        showPlayButton={false}
        slideInterval={2000}
        showFullscreenButton={false}
        isRTL={true}
        items={mainSliderImages}
        showThumbnails={false}
        showBullets={true}

        />

      

    </div>
  )
}

export default MainSlider