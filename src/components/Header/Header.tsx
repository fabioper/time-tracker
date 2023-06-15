import styles from "./Header.module.css"
import Link from "next/link"
import UserCard from "@/components/UserCard"

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/" className={styles.logo}>
          Time Tracker
        </Link>

        <UserCard />
      </div>
    </header>
  )
}
