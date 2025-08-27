import React from 'react'
import styles from '@/styles/ButtonPersonal.module.css'

export default function ButtonPersonal({title, description, price}:{title: string; description: string; price: string;}) {
  return (
    <div className={styles.typeButton}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}</p>
        <div className={styles.buttonsGroup}>
            <div className={styles.orderButton}>ORDER NOW</div>
            <div className={styles.findOutButton}>FIND OUT MORE</div>
        </div>
    </div>
  )
}
