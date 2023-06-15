"use client"

import styles from "./Breadcrumb.module.css"
import Link from "next/link"
import { MdHome } from "react-icons/md"
import { useCallback } from "react"
import type { Route } from "next"
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import { usePathname } from "next/navigation"

export interface BreadcrumbItem {
  label: string
  path?: Route
}

export function Breadcrumb() {
  const path = usePathname() as Route
  const items = useBreadcrumbs(path)

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

        {items.map(item => (
          <li key={item.path}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  )
}
