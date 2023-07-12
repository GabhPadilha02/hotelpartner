import Image from "next/image"
import style from "./style.module.scss"
import map from "../../../../public/assets/map.png"
import MdaFindUs from "../../../../public/assets/FindUs.png"
import Link from "next/link"
import tel from "../../../../public/assets/phone.svg"
import whatsapp from "../../../../public/assets/whatsapp-logo.svg"
import instagram from "../../../../public/assets/instagram-logo.svg"
import facebook from "../../../../public/assets/facebook-logo.svg"
import mapPin from "../../../../public/assets/map-pin.svg"

export function FindUs() {
  return (
    <div className={style.container} id="findUs">
      <Image src={MdaFindUs} alt="Marca D'água" className={style.mda}/>
      <Link href="/" className={style.map}>
        <Image src={map} alt="Mapa" />
      </Link>
      <footer className={style.footerContainer}>
        <div className={style.line}/>
        <div className={style.displayInfos}>
          <div className={style.contact}>
            <h2>Contate-nos</h2>
            <ul>
              <li>
                <Image src={tel} alt="Ícone de telefone"/>
                <span>(47)3305-6942</span>
              </li>
              <li>
                <Image src={whatsapp} alt="Ícone de telefone"/>
                <span>(47)99938-0066</span>
              </li>
            </ul>
          </div>
          <div className={style.vertLine}/>
          <div className={style.contact}>
            <h2>Siga-nos</h2>
            <ul>
              <li>
                <Image src={instagram} alt="Ícone do instagram"/>
                <span>@partneritapoa</span>
              </li>
              <li>
                <Image src={facebook} alt="Ícone do facebook'"/>
                <span>Partner Itapoa</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.location}>
          <Image src={mapPin} alt="Ícone de pino de mapa"/>
          <span>Av. Beira Mar 5, 1400, Itapoá - SC, 89249-000</span>
        </div>
      </footer>
     
    </div>
  )
}