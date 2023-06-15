import styles from "./Breadcrumb.module.css"
import Link from "next/link"
import { MdHome } from "react-icons/md"
import { useCallback } from "react"

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb(props: BreadcrumbProps) {
  const renderItem = useCallback((item: BreadcrumbItem) => {
    if (item.path) {
      return <Link href={item.path}>{item.label}</Link>
    }

    return <span>{item.label}</span>
  }, [])

  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li className={styles.home}>
          <Link href="/" title="Home">
            <MdHome />
          </Link>
        </li>

        {props.items.map(item => (
          <li key={item.path}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  )
}
