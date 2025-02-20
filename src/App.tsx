import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import NavBar from "./components/ui/NavBar"
import Hero from "./components/ui/Hero"
import Skills from "./components/ui/Skills"
import Footer from "./components/ui/Footer"
import { AnimatePresence, motion } from "framer-motion"

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <div className="flex flex-col min-h-screen bg-background">
            <NavBar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={
                  <motion.main
                    key="home"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex-grow"
                  >
                    <Hero />
                    <Skills />
                  </motion.main>
                } />
                <Route path="*" element={
                  <motion.main
                    key="404"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex-grow flex items-center justify-center"
                  >
                    <h1 className="text-4xl">404 - Page Not Found</h1>
                  </motion.main>
                } />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App