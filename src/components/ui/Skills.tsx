import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "Tailwind CSS", level: 95, color: "#06B6D4" },
  { name: "Next.js", level: 85, color: "#000000" },
  { name: "GraphQL", level: 75, color: "#E10098" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const skillVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

const barVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  })
}

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of the technologies I work with on a daily basis.
            I'm constantly learning and expanding my skill set.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 max-w-3xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-muted-foreground"
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div
                  variants={barVariants}
                  custom={skill.level}
                  className="h-full rounded-full"
                  style={{ 
                    backgroundColor: skill.color,
                    boxShadow: `0 0 20px ${skill.color}33`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            And many more! I'm always excited to learn new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills