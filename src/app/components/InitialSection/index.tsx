import Image from "next/image"
import firstText from "../../../../public/assets/firstText.png"
import style from "./style.module.scss"

export function InitialSection() {
  return (
    <main className={style.background}>
      <Image src={firstText} alt="Texto Principal"/>
    </main>
  )
}