import Image from "next/image"
import firstText from "../../../../public/assets/firstText.png"
import style from "./style.module.scss"
import lindnerLogo from "../../../../public/assets/logolindner.png"

export function InitialSection() {
  return (
    <main className={style.background}>
      <Image src={firstText} alt="Texto Principal" className={style.firsText}/>
      <Image src={lindnerLogo} alt="Logo" className={style.lindnerLogo} />
    </main>
  )
}