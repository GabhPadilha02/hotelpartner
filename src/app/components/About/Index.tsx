"use client"
import Image from "next/image";
import sunIcon from "../../../../public/assets/SunIcon.png"
import aboutImage from "../../../../public/assets/AboutImage.png"
import style from "./style.module.scss"
import qualityTitle from "../../../../public/assets/qualityTitle.png"
import pool from "../../../../public/assets/poolImage.png"
import glassInfo from "../../../../public/assets/GlassInfo.png"
import aboutUsTitle from "../../../../public/assets/AboutUsTitle.png"
import { EyeClosed, Sun, Waves } from "phosphor-react";
import { SwimmingPool } from "@phosphor-icons/react";


export function About() {
  return (
    <main className={style.container}>
      <div className={style.firstInfoContainer}>
        <div className={style.textContainer}>
          <Image src={sunIcon} alt="Icone de Sol" className={style.sun} width={200}/>
          <p>Aproveite um pôr do sol incrível, refrescante brisa do mar e um ambiente relaxante em nosso hotel na praia.</p>
        </div>
        <Image src={aboutImage} alt="Imagem do hotel" className={style.aboutImage} />
      </div>

      <div className={style.line}></div>

      <div className={style.qualityListContainer}>
        <Image src={qualityTitle} alt="Titulo da sessão" height={150} className={style.qualityTitle}/>
        <div className={style.qualityDisplay}>
          <ul className={style.qualityList}>
            <li>
              1. Acesso à praia: A principal vantagem de um hotel de praia é a proximidade com a praia. Você pode caminhar até a praia em questão de minutos e aproveitar as areias brancas, a brisa do mar e o som das ondas.
            </li>
            <li>
              2. Ambiente relaxante: Um hotel de praia é um lugar perfeito para relaxar e desestressar. Você pode se deitar na praia, ouvir música, ler um livro ou simplesmente apreciar a vista do oceano.
            </li>
            <li>
              3. Atividades aquáticas: Muitos hotéis de praia oferecem atividades aquáticas como surfe, caiaque, paddle board, snorkeling e mergulho, permitindo que você experimente novas atividades e explore a vida marinha local.
            </li>
            <li>
              4. Comida deliciosa: Hotéis de praia geralmente oferecem uma variedade de opções de restaurantes, incluindo frutos do mar frescos e pratos locais, para que você possa experimentar a culinária da região.
            </li>
            <li>
              5. Férias memoráveis: Um hotel de praia oferece a oportunidade de criar memórias duradouras com amigos e familiares, desfrutando do sol, do mar e da areia.
            </li>
          </ul>
          <Image src={pool} alt="Foto da piscina" className={style.pool}/>
        </div>
      </div>

      <div className={style.aboutUsContainer}>
        <Image src={aboutUsTitle} alt="Titulo da sessão sobre nós" height={90} className={style.glassInfoTitle}/>
        <div className={style.glassInfoContainer}>
          <div className={style.qualityDisplay}>
            <div className={style.qualityItem}>
              <Sun size={230}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda, ipsum corporis possimus dolores porro perspiciatis iusto eligendi praesentium tempore!</p>
            </div>
            <div className={style.qualityItem}>
              <EyeClosed size={230}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus deleniti, ipsam quae nostrum consequuntur iusto vel sit reprehenderit enim?</p>
            </div>
          </div>
          <div className={style.qualityDisplay}>
            <div className={style.qualityItem}>
              <SwimmingPool size={230}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sint libero aperiam vero natus ea nobis tenetur assumenda eos nesciunt?</p>
            </div>
            <div className={style.qualityItem}>
              <Waves size={230}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusamus odio saepe inventore quasi aliquid obcaecati placeat magnam dolores quam?</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}