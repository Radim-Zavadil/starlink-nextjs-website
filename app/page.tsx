import Image from "next/image";
import styles from "@/styles/page.module.css";

//components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ButtonPersonal from "@/components/ButtonPersonal";

export default function Home() {
  return (
    <div className={styles.page}>

      <Image
        src='/personal/personalCottage.webp'
        alt='universe picture'
        fill
        style={{ objectFit: "cover", zIndex: -1, filter: "brightness(0.7)"}}

      />

      <Navigation/>

      <div className={styles.content}>
        <p className={styles.title}>HIGH SPEED INTERNET <br/> WORLDWIDE</p>
        <p className={styles.description}>Connect from home or on the go</p>
        <p className={styles.description}>See <span style={{fontWeight: "700"}}>speeds</span> in your country</p>

        <div className={styles.buttonsGroup}>
          <ButtonPersonal 
            title="RESIDENTIAL"
            description="Connecting from home"
            price="From 875 CZK/month per service"
          />
          <ButtonPersonal 
            title="ROAMING"
            description="Connect on the go, wherever you go in any of the 100+ markets"
            price="From 1,050 CZK/month per service"
          />
        </div>
      </div>
      
      <Footer />
      
    </div>
  );
}
