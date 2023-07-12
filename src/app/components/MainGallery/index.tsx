import Image from "next/image"
import galleryTitle from "../../../../public/assets/galleryTitle.png"
import slider1 from "../../../../public/assets/slider1.png"
import SliderComponent from "../Slider"
import Slider from "../Slider"
import style from "./style.module.scss"

export function MainGallery() {
  const images = [
    'https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://plus.unsplash.com/premium_photo-1676977395918-7300b6375e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

  ];
 

  return (
    <main id="gallery">
      <Image src={galleryTitle} alt="Titulo da Galeria" height={150} className={style.galleryTitle}/>
      <div className={style.sliderContainer}>
        <Slider />
      </div>
    </main>
  )
}