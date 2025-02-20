import { Button } from "./button"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/60 backdrop-blur-xl z-50 border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary hover:opacity-80 transition-opacity"
        >
          Portfolio
        </Link>
        <div className="space-x-1 sm:space-x-2">
          <Button 
            variant="ghost" 
            className="hover:bg-primary/5 transition-colors rounded-full text-sm"
            asChild
          >
            <Link to="/">Home</Link>
          </Button>
          <Button 
            variant="ghost" 
            className="hover:bg-primary/5 transition-colors rounded-full text-sm"
            asChild
          >
            <Link to="/portfolio">Work</Link>
          </Button>
          <Button 
            variant="ghost" 
            className="hover:bg-primary/5 transition-colors rounded-full text-sm"
            asChild
          >
            <Link to="/blog">Blog</Link>
          </Button>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-primary to-primary hover:opacity-90 transition-opacity rounded-full text-sm"
            asChild
          >
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar