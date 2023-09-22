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
import lindnerLogo from "../../../../public/assets/logolindner.png"

export function FindUs() {
  return (
    <div className={style.container} id="findUs">
      <Image src={MdaFindUs} alt="Marca D'água" className={style.mda}/>
      <Link href="https://www.google.com/maps/place/Av.+Beira+Mar+5,+1400,+Itapo%C3%A1+-+SC,+89249-000/@-26.1765022,-48.592497,17z/data=!3m1!4b1!4m6!3m5!1s0x94d9503746494383:0x8154489fe6382ef8!8m2!3d-26.1765022!4d-48.5899221!16s%2Fg%2F11gtyw1gb_?entry=ttu" passHref target="_blank" className={style.map}>
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
                <span>(47)99650-1196</span>
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
        <Image src={lindnerLogo} alt="Logo" className={style.lindnerLogo} /> 
      </footer>
     
    </div>
  )
}
