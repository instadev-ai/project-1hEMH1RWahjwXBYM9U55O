import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"
import { Badge } from "./badge"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "/placeholder.jpg",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with modern design",
    tags: ["Next.js", "Redux", "Node.js"],
    image: "/placeholder.jpg",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Real-time dashboard with data visualization",
    tags: ["React", "D3.js", "Firebase"],
    image: "/placeholder.jpg",
    link: "#",
  },
]

const Portfolio = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a
                  href={project.link}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio