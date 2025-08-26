import Image from "next/image";
import styles from "@/styles/page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>

      <Header/>
      
      <main className={styles.main}>
        main
      </main>
      
      <Footer />
      
    </div>
  );
}
