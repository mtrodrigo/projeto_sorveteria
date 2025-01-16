import Image from "next/image";
import styles from "./page.module.css";
import BannerSabores from "@/../public/banner-sabores.jpg"
import BannerEventos from "@/../public/eventos-image.jpg"
import BannerSobre from "@/../public/sobre-image.jpg"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.capa}>
        <div className={styles.texto_capa}>
          <h1>SORVETE ARTESANAL</h1>
        </div>
      </section>
      <section className={styles.banners}>
        <div className={styles.banners_img_tx}>
          <figure className={styles.img_container}>
            <Image className={styles.img} src={BannerSabores} alt="Banner Sabores" />  
          </figure>
          <div className={styles.tx}>
            <h2>NOSSOS PRODUTOS</h2>
            <span>Novos e deliciosos!</span>
            <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
          </div>
        </div>
        <div className={styles.banners_img_tx_reverse}>
          <div className={styles.tx}>
            <h2>NOSSOS EVENTOS</h2>
            <span>Delicias com sorvete!</span>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </div>
          <figure className={styles.img_container}>
            <Image className={styles.img} src={BannerEventos} alt="Banner Eventos" />  
          </figure>
        </div>
        <div className={styles.banners_img_tx}>
          <figure className={styles.img_container}>
            <Image className={styles.img} src={BannerSobre} alt="Banner Sobre" />  
          </figure>
          <div className={styles.tx}>
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
