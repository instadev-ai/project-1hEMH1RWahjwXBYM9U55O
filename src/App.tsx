import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
import { Sonner } from "./components/ui/sonner"
import { NavBar } from "./components/ui/NavBar"
import { Hero } from "./components/ui/Hero"
import { AnimatePresence, motion } from "framer-motion"
import "./App.css"

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

function App() {
  return (
    <>
      <Toaster />
      <Sonner />
      <Router>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[#1a1a2e] selection:bg-[#4d5bf9]/20 selection:text-[#4d5bf9] text-white"
        >
          <NavBar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  key="home"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Hero />
                </motion.div>
              } />
              <Route path="*" element={
                <motion.div
                  key="404"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <div className="flex items-center justify-center min-h-screen">
                    <h1 className="text-4xl">404 - Page Not Found</h1>
                  </div>
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </motion.div>
      </Router>
    </>
  )
}

export default App