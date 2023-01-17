import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="text-white bg-slate-500 py-2 px-4">
      <ul className="flex gap-4">
        <Link to="login">Sign In</Link>
        <Link to="register">Sign Up</Link>
      </ul>
    </nav>
  )
}