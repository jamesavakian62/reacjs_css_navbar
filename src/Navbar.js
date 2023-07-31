import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        James L. Avakian Websites
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/portfolio">Portfolio</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About Me</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
