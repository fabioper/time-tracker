"use client"

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

function Breadcrumb() {
  const path = usePathname() as Route
  const items = useBreadcrumbs(path)

  const renderItem = useCallback((item: BreadcrumbItem) => {
    if (item.path) {
      return <Link href={item.path}>{item.label}</Link>
    }

    return <span>{item.label}</span>
  }, [])

  return (
    <div>
      <ul className="flex items-center gap-2 text-[#454545] text-sm my-8">
        <li className="flex items-center">
          <Link href="/" title="Home" className="text-foreground">
            <MdHome className="text-base" />
          </Link>
        </li>

        {items.map((item) => (
          <li
            key={item.path}
            className="flex items-center before:content-['/'] before:mr-2"
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumb
