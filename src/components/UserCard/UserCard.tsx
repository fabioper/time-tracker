import styles from "./UserCard.module.css"
import Link from "next/link"
import Image from "next/image"

export function UserCard() {
  const user = {
    name: "Fábio Silva",
    picture: "https://placehold.co/400x400/png",
  }

  return (
    <div className={styles.userCard}>
      <Image
        src={user.picture}
        alt=""
        width={40}
        height={40}
        className={styles.picture}
      />

      <div className={styles.userInfo}>
        <strong className={styles.username}>{user.name}</strong>
        <Link href="/" className={styles.signoutLink}>
          Sair
        </Link>
      </div>
    </div>
  )
}
