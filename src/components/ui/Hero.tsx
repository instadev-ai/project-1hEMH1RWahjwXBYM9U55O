import { Button } from "./button"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-up">
          Creative Developer &
          <br /> Digital Creator
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-[600px] animate-fade-up animation-delay-100">
          I craft beautiful, responsive websites and digital experiences that make an impact.
        </p>
        <div className="mt-8 flex gap-4 animate-fade-up animation-delay-200">
          <Button size="lg" asChild>
            <a href="#portfolio">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero