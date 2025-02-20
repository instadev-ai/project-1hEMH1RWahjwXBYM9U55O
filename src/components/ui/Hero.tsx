import { Button } from "./button"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      {/* Abstract background shapes with Framer Motion */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-[#4d5bf9]/20 to-[#ff49db]/20 blur-3xl rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-[#0ea5e9]/10 to-[#4d5bf9]/10 blur-3xl rounded-full"
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 py-16 md:py-24 flex flex-col items-center text-center relative z-10"
      >
        <motion.span 
          variants={itemVariants}
          className="text-sm font-medium text-[#4d5bf9] mb-4 tracking-wider uppercase"
        >
          Welcome to my portfolio
        </motion.span>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e2e8f0] to-[#94a3b8]"
        >
          Creative Developer &
          <br /> Digital Creator
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-[#94a3b8] max-w-[600px] leading-relaxed"
        >
          I craft beautiful, responsive websites and digital experiences that make an impact.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="px-8 rounded-full bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9] hover:opacity-90 transition-opacity border-0 text-white"
              asChild
            >
              <a href="#portfolio" className="font-medium">View My Work</a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 rounded-full border-2 border-[#4d5bf9] text-[#4d5bf9] hover:bg-[#4d5bf9]/10 transition-colors"
              asChild
            >
              <a href="#contact" className="font-medium">Get in Touch</a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 rounded-full border-2 border-[#4d5bf9] flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 rounded-full bg-[#4d5bf9]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero