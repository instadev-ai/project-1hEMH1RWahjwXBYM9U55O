import { Button } from "./button"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-[#4d5bf9]/20 to-[#ff49db]/20 blur-3xl rounded-full transform rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-[#0ea5e9]/10 to-[#4d5bf9]/10 blur-3xl rounded-full transform -rotate-12 animate-pulse delay-1000" />
      </div>

      <div className="container px-4 py-16 md:py-24 flex flex-col items-center text-center relative z-10">
        <span className="text-sm font-medium text-[#4d5bf9] mb-4 tracking-wider uppercase animate-fade-up">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-white via-[#e2e8f0] to-[#94a3b8]">
          Creative Developer &
          <br /> Digital Creator
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#94a3b8] max-w-[600px] animate-fade-up animation-delay-100 leading-relaxed">
          I craft beautiful, responsive websites and digital experiences that make an impact.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-200">
          <Button 
            size="lg" 
            className="px-8 rounded-full bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9] hover:opacity-90 transition-opacity border-0 text-white"
            asChild
          >
            <a href="#portfolio" className="font-medium">View My Work</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 rounded-full border-2 border-[#4d5bf9] text-[#4d5bf9] hover:bg-[#4d5bf9]/10 transition-colors"
            asChild
          >
            <a href="#contact" className="font-medium">Get in Touch</a>
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#4d5bf9] flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-[#4d5bf9] animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero