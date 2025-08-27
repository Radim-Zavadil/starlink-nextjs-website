import React from 'react'
import styles from '@/styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <div className={styles.navigation}>
        <div className={styles.navigationGroup}>
            <Link href='/' className={styles.logo}>Starlink</Link>
            <Link href='/residential' className={styles.link}>Residential</Link>
            <Link href='/roam' className={styles.link}>Roam</Link>
        </div>
        <div className={styles.navigationGroup}>
            <Link href='/' className={`${styles.link} ${styles.active}`}>Personal</Link>
            <Link href='/business' className={styles.link}>Business</Link>
            <Image 
                src={"/menu.png"}
                alt='Menu Icon'
                width={30}
                height={30}
                className={styles.menu}
            />
        </div>
    </div>
  )
}
