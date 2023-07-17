import Link from "next/link"

function Header() {
  return (
    <header className="py-5 border border-header-border">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-base font-bold">
          Time Tracker
        </Link>
      </div>
    </header>
  )
}

export default Header
