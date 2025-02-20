import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "./button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#1a1a2e] border-t border-[#4d5bf9]/20 pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9]"
            >
              Portfolio
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-[#94a3b8] hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#94a3b8]">
              <li>contact@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Avenue</li>
              <li>Tech City, TC 12345</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-[#94a3b8] text-sm mb-4">
              Subscribe to my newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-[#16213e] text-white rounded-full px-4 py-2 text-sm border border-[#4d5bf9]/20 focus:outline-none focus:border-[#4d5bf9] transition-colors flex-1"
              />
              <Button 
                size="sm"
                className="rounded-full bg-gradient-to-r from-[#4d5bf9] to-[#0ea5e9] hover:opacity-90 transition-opacity"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#4d5bf9]/20">
          <p className="text-[#94a3b8] text-sm mb-4 sm:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:contact@example.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-[#94a3b8] hover:text-white transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer