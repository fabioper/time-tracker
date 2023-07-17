import "./globals.css"
import { type PropsWithChildren } from "react"
import { inter } from "@/assets/fonts"
import Header from "@/components/Header"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata = {
  title: "Time Tracker",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>
        <Header />
        <div className="container mt-8">
          <Breadcrumb />
          {children}
        </div>
      </body>
    </html>
  )
}
