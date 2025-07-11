import { useState, useEffect } from 'react'
import { ChevronDown, ArrowDown, Github, Linkedin, Twitter, Download, Mail } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Check system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'about', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const projects = [
    {
      id: 1,
      title: 'Codepedition - Gamified Learning Platform',
      description: 'An interactive coding platform that transforms traditional roadmaps into gamified expeditions. Features quest-style challenges, real-world projects, XP systems, and visual progress tracking to keep developers motivated while learning.',
      tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Supabase', 'Gamification', 'Education'],
      emoji: '🎮',
      link: 'https://github.com/Emagjby/codepedition'
    },
    {
      id: 2,
      title: 'GT-API - Football Live Score Tracker',
      description: 'Real-time football match score tracking and notification system. Fetches live match data from API-Football, processes match events, and provides real-time notifications via WebSocket using SignalR for instant updates.',
      tags: ['.NET 8', 'C#', 'SignalR', 'PostgreSQL', 'Redis', 'WebSocket', 'Real-time'],
      emoji: '⚽',
      link: 'https://github.com/Emagjby/gt-api'
    },
    {
      id: 3,
      title: 'DoToo - Developer Todo App',
      description: 'A modern todo application built specifically for developers. Features Kanban boards, code snippets with syntax highlighting, git branch generation, command palette (Cmd+K), and developer-friendly themes. Built for developers, by developers.',
      tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Developer Tools'],
      emoji: '✅',
      link: 'https://github.com/Emagjby/DoToo'
    },
    {
      id: 4,
      title: 'PGTKSpace - Modern Social Platform',
      description: 'A modern, responsive social media application with infinite scroll feed, real-time updates, stories, and mobile-first design. Features optimistic UI, progressive image loading, connection quality optimization, and glass morphism design.',
      tags: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'React Query', 'Tailwind CSS', 'Social Media'],
      emoji: '🚀',
      link: 'https://pgtkspace.com'
    }
  ]

  const skills = [
    'C#/.NET', 'React', 'Node.js', 'TypeScript', 'Supabase', 
    'PostgreSQL', 'Docker', 'AWS', 'Git', 'Next.js'
  ]

  return (
    <div className="app">
      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <span className="toggle-icon">
              {isDarkMode ? '🌙' : '☀️'}
            </span>
          </div>
        </div>
      </button>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title fade-in">
              Hi, I'm <span className="highlight">GenchoXD</span> — a Software Engineer focused on building practical, scalable applications.
            </h1>
            <p className="hero-subtitle fade-in-delay">
              I design and develop efficient tools, web platforms, and systems that solve real problems. 
              I love turning ideas into polished products that make a difference.
            </p>
            <button 
              className="cta-button fade-in-delay-2"
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </button>
          </div>
        </div>
        
        <div className="scroll-indicator" style={{ opacity: scrollY > 100 ? 0 : 1 }}>
          <div className="scroll-arrow">
            <ArrowDown size={16} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card slide-in-${index % 2 === 0 ? 'left' : 'right'} ${project.link ? 'clickable' : ''}`}
                onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
                style={{ cursor: project.link ? 'pointer' : 'default' }}
              >
                <div className="project-card-container">
                  <div className="project-content">
                    <div className="project-header">
                      <span className="project-emoji">{project.emoji}</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">#{tag}</span>
                      ))}
                    </div>
                  </div>
                  {project.link && (
                    <div className="project-link-wrapper">
                      <div className="project-link-indicator">
                        <span>Click to view on GitHub →</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="about-text">
              I'm an 18-year-old Software Engineer with a passion for creating impactful digital solutions. 
              With over 4 years of hands-on experience, I've mastered the art of building full-stack applications, 
              developer tools, and system utilities that bridge the gap between complex technology and user needs.
            </p>
            
            <div className="skills-section">
              <h3 className="skills-title">Technical Arsenal</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
            
            <div className="philosophy">
              <blockquote className="philosophy-quote">
                "The best code is not just functional, but tells a story that future developers can understand and build upon."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <div className="contact-content">
            <p className="contact-text">
              Ready to bring your next big idea to life? I'm always excited to collaborate on projects 
              that challenge the status quo and create meaningful impact.
            </p>
            <div className="contact-links">
              <a href="mailto:emagjby@gmail.com" className="contact-link primary">
                <Mail size={20} />
                Get in Touch
              </a>
              <div className="social-links">
                <a href="https://github.com/Emagjby" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/evgeni-dochev-b80906342/" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a href="https://twitter.com/genchoxd" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                  Twitter
                </a>
                <a href="/resume.pdf" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App 