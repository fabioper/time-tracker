import type { Route } from "next"
import { type BreadcrumbItem } from "@/components/Breadcrumb/Breadcrumb"

const breadcrumbs: Record<Route, BreadcrumbItem[]> = {
  "/": [],
}

export function useBreadcrumbs<T extends string>(path: Route<T>) {
  const breadcrumb = breadcrumbs[path]

  if (!breadcrumb) {
    throw new Error("Breadcrumb para esta página não foi definido.")
  }

  return breadcrumb || []
}
