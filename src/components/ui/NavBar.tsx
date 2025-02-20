import { Button } from "./button"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Portfolio
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/portfolio">Work</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/blog">Blog</Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar