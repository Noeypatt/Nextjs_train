import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/', label: 'Manage' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>

    <ul>

      <li className="nav-logo">
        <img src="/static/logo.png" alt="logo"/>
        <p>logo</p>
      </li>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

  </nav>
)

export default Nav
