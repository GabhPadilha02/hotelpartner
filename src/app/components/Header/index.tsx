import Image from "next/image";
import Logo from "../../../../public/assets/logo.png"
import Instragram from "../../../../public/assets/instagram-logo.svg"
import Whats from "../../../../public/assets/whatsapp-logo.svg"
import Facebook from "../../../../public/assets/facebook-logo.svg"
import Tel from "../../../../public/assets/phone.svg"
import style from "./style.module.scss"
import list from "../../../../public/assets/list.svg"

export default function Header() {
  return (
   
    <header className={style.container}>
      <nav className={style.headerContainer}>
        <input type="checkbox" id="check" className={style.check} />
        <label htmlFor="check" className={style.checkbtn}>
          <Image src={list} alt="Ícone menu"/>
        </label>
        <a href="/"><Image alt="Logo" src={Logo} className={style.logo}/></a>
        <ul className={style.linksContainer}>
          <li><a href="/">INÍCIO</a></li>
          <li><a href="#about">SOBRE</a></li>
          <li><a href="#gallery">GALERIA</a></li>
          <li><a href="#findUs">ENCONTRE-NOS</a></li>
        </ul>
        <ul className={style.iconsLinks}>
           <li><a href="https://www.instagram.com/partneritapoa/" target="_blank"><Image src={Instragram} alt="Ícone Instagram"/></a></li>
           <li><a href="https://wa.me/5547999380066" target="_blank"><Image src={Whats} alt="Ícone Whats"/></a></li>
           <li><a href="https://www.facebook.com/profile.php?id=100090911494350" target="_blank"> <Image src={Facebook} alt="Ícone Facebook"/></a></li>
         </ul>
      </nav>
    </header>
  )
}