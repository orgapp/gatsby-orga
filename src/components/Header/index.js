import React from 'react'
import { Link } from 'gatsby'
import style from './_style.module.css'

const Header = () => (
  <div className={style.container}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'gray',
            textDecoration: 'none',
          }}
        >
          Gatsby + Orga
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
