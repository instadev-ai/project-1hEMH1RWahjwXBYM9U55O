import { Button } from "./button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const NavBar = () => {
  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full bg-[#1a1a2e]/80 backdrop-blur-xl z-50 border-b border-[#4d5bf9]/20"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9] hover:opacity-80 transition-opacity"
          >
            Portfolio
          </Link>
        </motion.div>
        
        <motion.div 
          className="space-x-1 sm:space-x-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              variant="ghost" 
              className="hover:bg-[#4d5bf9]/10 transition-colors rounded-full text-sm text-[#e2e8f0] hover:text-white"
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              variant="ghost" 
              className="hover:bg-[#4d5bf9]/10 transition-colors rounded-full text-sm text-[#e2e8f0] hover:text-white"
              asChild
            >
              <Link to="/portfolio">Work</Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              variant="ghost" 
              className="hover:bg-[#4d5bf9]/10 transition-colors rounded-full text-sm text-[#e2e8f0] hover:text-white"
              asChild
            >
              <Link to="/blog">Blog</Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9] hover:opacity-90 transition-opacity rounded-full text-sm border-0"
              asChild
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default NavBar