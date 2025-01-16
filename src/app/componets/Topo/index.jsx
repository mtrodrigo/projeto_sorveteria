import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo.png"
import style from "./index.module.css"


export default function Topo(){
    return(
        <header className={style.cabecalho}>
            <section className={style.container_cabecalho}>
                <figure>
                    <Image className={style.img_cabecalho} src={Logo} alt="Logo" />
                </figure>
                <nav className={style.link_container}>
                    <Link className={style.link} href="/">Home</Link>
                    <Link className={style.link} href="/sabores">Sabores</Link>
                    <Link className={style.link} href="/sobre">Sobre</Link>
                </nav>
            </section>
        </header>
    )
}