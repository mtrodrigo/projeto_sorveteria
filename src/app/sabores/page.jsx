import style from "./Sabores.module.css"
import Image from "next/image"
import oreo from "@/../public/sabor-oreo.png"
import pistache from "@/../public/sabor-pistache.png"
import cookies from "@/../public/sabor-cookies-avela.png"
import kiwi from "@/../public/sorbet-kiwi.png"
import morango from "@/../public/sorbet-morango.png"
import limao from "@/../public/sorbet-limao.png"


export default function Sabores(){
    return(
        <main className={style.section_sabores}>
            <section className={style.banner}>
                <h1>NOSSOS SABORES</h1>
            </section>
            <section className={style.section_cards}>
                <h2>SABORES DE SORVETE</h2>
                <div className={style.cads_container1}>
                    <figure className={style.cards}>
                        <Image className={style.img_card} src={oreo} alt="Sorvete de Oreo" />
                        <figcaption>Sorvete de Oreo</figcaption>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </figure>
                    <figure className={style.cards}>
                        <Image className={style.img_card} src={pistache} alt="Sorvete de Pistache" />
                        <figcaption>Sorvete de Pistache</figcaption>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </figure>
                    <figure className={style.cards}>
                        <Image className={style.img_card} src={cookies} alt="Sorvete de Cookies & Avelã" />
                        <figcaption>Sorvete de Cookies & Avelã</figcaption>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </figure>
                </div>
                <div className={style.cads_container2}>
                    <figure className={style.cards}>
                        <Image className={style.img_card} src={kiwi} alt="Sorvete de Kiwi" />
                        <figcaption>Sorvete de Kiwi</figcaption>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </figure>
                    <figure className={style.cards}>
                        <Image className={style.img_card} src={morango} alt="Sorvete de Morango" />
                        <figcaption>Sorvete de Morango</figcaption>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </figure>
                    <figure className={style.cards}>
                        <Image className={style.img_card} src={limao} alt="Sorvete de Limão Siciliano" />
                        <figcaption>Sorvete de Limão Siciliano</figcaption>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </figure>
                </div>
            </section>
        </main>
    )
}