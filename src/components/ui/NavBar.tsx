import { Button } from "./button"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#1a1a2e]/80 backdrop-blur-xl z-50 border-b border-[#4d5bf9]/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9] hover:opacity-80 transition-opacity"
        >
          Portfolio
        </Link>
        <div className="space-x-1 sm:space-x-2">
          <Button 
            variant="ghost" 
            className="hover:bg-[#4d5bf9]/10 transition-colors rounded-full text-sm text-[#e2e8f0] hover:text-white"
            asChild
          >
            <Link to="/">Home</Link>
          </Button>
          <Button 
            variant="ghost" 
            className="hover:bg-[#4d5bf9]/10 transition-colors rounded-full text-sm text-[#e2e8f0] hover:text-white"
            asChild
          >
            <Link to="/portfolio">Work</Link>
          </Button>
          <Button 
            variant="ghost" 
            className="hover:bg-[#4d5bf9]/10 transition-colors rounded-full text-sm text-[#e2e8f0] hover:text-white"
            asChild
          >
            <Link to="/blog">Blog</Link>
          </Button>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9] hover:opacity-90 transition-opacity rounded-full text-sm border-0"
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