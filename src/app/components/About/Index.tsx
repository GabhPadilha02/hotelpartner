"use client"
import Image from "next/image";
import sunIcon from "../../../../public/assets/SunIcon.png"
import aboutImage from "../../../../public/assets/aboutImage.jpg"
import style from "./style.module.scss"
import qualityTitle from "../../../../public/assets/qualityTitle.png"
import pool from "../../../../public/assets/pool.jpg"
import aboutUsTitle from "../../../../public/assets/AboutUsTitle.png"
import { Sun, Waves, ForkKnife, SunHorizon,  } from "phosphor-react";



export function About() {
  return (
    <main className={style.container}>
      <div className={style.firstInfoContainer}>
        <div className={style.textContainer}>
          <Image src={sunIcon} alt="Icone de Sol" className={style.sun} width={200}/>
          <p>Aproveite um por do sol incrível, brisa do mar e um ambiente relaxante de frente para a Baía da Babitonga.</p>
        </div>
        <Image src={aboutImage} alt="Imagem do hotel" className={style.aboutImage} />
      </div>

      <div className={style.line}></div>

      <div className={style.qualityListContainer} >
        <Image src={qualityTitle} alt="Titulo da sessão" height={150} className={style.qualityTitle}/>
        <div className={style.qualityDisplay}>
          <ul className={style.qualityList}>
           <li>O Partner Itapoá oferece acomodações bem estruturadas, num ambiente agradável e aconchegante. Os Apartamentos são modernos e confortáveis, as suítes luxo tem vista para a Baia da Babitonga, o delicioso café da manhã é cortesia na diária.</li>
            <li>
            É ideal para renovar as energias, descansar e relaxar, contamos com um deck, um mirante com a vista da Baia. Inúmeros Navios que entram na Baia para atracar no Porto de Itapoá, distante a 1,5 km do hotel.
            </li>
            <li>
            A praia de Itapoá com 32 km de praias, centro de comércio e pontos turísticos próximos, como a terceira Pedra,  a Vila da Glória, cachoeiras casarão , gastronomia local, locais próximos para locação de caiaques e stand up.
            </li>
          </ul>
          <Image src={pool} alt="Foto da piscina" className={style.pool}/>
        </div>
      </div>

      <div className={style.aboutUsContainer} id="about">
        <Image src={aboutUsTitle} alt="Titulo da sessão sobre nós" height={90} className={style.glassInfoTitle}/>
        <div className={style.glassInfoContainer}>
          <div className={style.qualityDisplay}>
            <div className={style.qualityItem}>
              <Sun size={150}/>
              <p>Quartos com vista para o mar: Nossos quartos com vista para o mar oferecem uma experiência única e relaxante, onde você pode desfrutar de vistas deslumbrantes enquanto se aconchega na sua cama.</p>
            </div>
            <div className={style.qualityItem}>
              <ForkKnife size={200}/>
              <p>Conta com a parceria em anexo do Restaurante Zinho Batista Itapoá, para você desfrutar o que há de melhor em gastronomia, evidenciando os pratos de frutos do mar, como rodízios, sequências e porções. Com um bar com diversos tipos de drinks e bebidas. Atendendo aos hospedes e também aberto ao público.</p>
            </div>
          </div>
          <div className={style.qualityDisplay}>
            <div className={style.qualityItem}> 
              <SunHorizon size={120}/>
              <p>Piscina à beira-mar: Refresque-se e relaxe em nossa piscina à beira-mar, com vista para o oceano e rodeada por espreguiçadeiras confortáveis.</p>
            </div>
            <div className={style.qualityItem}>
              <Waves size={320}/>
              <p>Anexa ao Partner Hotel Itapoá e restaurante, está a Marina Itapoá, esta Marina oferece aos hospedes serviços de Day Use, como guarda e adoçamento e lavação de  jet - sky, lanchas durante a estada no Hotel. Também possui, poitas de amarração, com total segurança, para quem vem pelo mar, bem como o serviço de transbordo da embarcação para a terra e vice versa, como também para locação de vagas anuais.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}