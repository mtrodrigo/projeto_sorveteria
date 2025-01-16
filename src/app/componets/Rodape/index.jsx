import Image from "next/image"
import style from "./index.module.css"
import Logo from "@/../public/logo.png"
import Link from "next/link"

export default function Rodape(){
    return(
        <footer className={style.rodape}>
            <section className={style.rodape_container}>    
                <section className={style.rodape_contato}>
                    <div className={style.contato_box}>
                        <Image className={style.img_rodape} src={Logo} alt="Logo" />
                    </div>
                    <div className={style.contato_box}>
                        <h3>ENDEREÇO</h3>
                        <p>Av. Bernadino de Campos, 98</p>
                        <p>São Paulo, SP, 123456-78</p>
                    </div>
                    <div className={style.contato_box}>
                        <h3>CONTATO</h3>
                        <p>info@meusite.com</p>
                        <p>Tel: (11)99999-1234</p>
                    </div>
                    <div className={style.contato_box}>
                        <h3>HORÁRIOS</h3>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 22:00</p>
                    </div>
                </section>
                <section className={style.rodape_criador}>
                    <p>&copy; 2025 Gelateria </p>
                    <span>Desenvolvido por <strong><Link className={style.link} target="_blank" href="https://www.linkedin.com/in/rodrigo-marques-tavares-9482b4226/">Rodrigo Marques Tavares</Link></strong></span>
                </section>
            </section>
        </footer>
    )
}