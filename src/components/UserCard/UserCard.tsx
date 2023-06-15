import styles from "./UserCard.module.css"
import Link from "next/link"
import Image from "next/image"

export function UserCard() {
  return (
    <div className={styles.userCard}>
      <Image
        src="https://placehold.co/400x400/png"
        alt=""
        width={40}
        height={40}
        className={styles.picture}
      />
      <div className={styles.userInfo}>
        <strong>Fábio Silva</strong>
        <Link href="/">Sair</Link>
      </div>
    </div>
  )
}
