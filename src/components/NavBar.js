import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About the extension
          </Link>
        </li>
        <li>
          <Link href="/policy">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  )
}
