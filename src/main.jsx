import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const content = {
  name: "Weliton Rodrigues",
  headline: "Software Engineer / JAVA / SpringBoot / MySQL / Docker",
  summary: "Estudante de Engenharia de Software (3ª fase) em migração de carreira para tecnologia. Foco em Java, Spring Boot, MySQL e React, com projetos práticos e vontade de aprender rápido.",
  location: "Jaraguá do Sul, Santa Catarina, Brasil",
  email: "mailto:weliton.rodrigues29wr@gmail.com",
  social: {
    github: "https://github.com/welitonrodriguess",
    linkedin: "https://www.linkedin.com/in/weliton-rodriguess",
    instagram: "",
    x: "",
    website: ""
  },
  projects: [
    {
      title: "Reino dos Números",
      desc: "Jogo educacional 2D em Godot; bosses exigem resolver desafios de matemática para avançar.",
      tags: ["Godot","GameDev","Educação","Matemática","2D"],
      link: "https://github.com/welitonrodriguess/ReinoDosNumeros"
    },
    {
      title: "AgendeLimpezaAPP",
      desc: "Aplicação Spring Boot para agendamento de serviços de limpeza com API REST e MySQL.",
      tags: ["Java","Spring Boot","MySQL","API"],
      link: "https://github.com/welitonrodriguess/AgendeLimpezaAPP"
    },
    {
      title: "Catalogo_SpringBoot",
      desc: "Catálogo de automóveis (CRUD) com Spring Boot MVC e Thymeleaf.",
      tags: ["Java","Spring Boot","MVC","Thymeleaf"],
      link: "https://github.com/welitonrodriguess/Catalogo_SpringBoot"
    },
    {
      title: "AppTarefas",
      desc: "Aplicação desktop em JavaFX para gerenciamento de tarefas.",
      tags: ["Java","JavaFX","CRUD","Produtividade"],
      link: "https://github.com/welitonrodriguess/AppTarefas"
    }
  ],
  skills: {
    dev: ["Java","Spring Boot","JavaScript","Python","SQL","React"],
    tools: ["Docker","MySQL","GitHub"],
    comp: ["Desenvolvimento Responsivo","Automação de Processos","UI/UX Basics"]
  },
  activities: [
    "Certificações: Java Developer, Lógica de Programação, DevOps Fundamentals, Programming and Communication",
    "Participação: GAME JAM CATÓLICA 2024"
  ],
  education: [
    {
      degree: "Bacharelado em Engenharia de Software",
      institution: "Católica de Santa Catarina",
      period: "Jul 2024 – Jul 2028",
      highlights: ["Ênfase em lógica, bancos e estruturas de dados"]
    },
    {
      degree: "Banco de Dados e Processamento de Dados",
      institution: "Descomplica Faculdade Digital",
      period: "Jul 2025 – Dez 2027",
      highlights: ["Foco em processamento de dados e tecnologia"]
    }
  ],
  lastUpdated: "2025-09-30"
}

function Header() {
  return (
    <header>
      <div className="container">
        <a className="skip" href="#main">Pular para conteúdo</a>
        <nav aria-label="Navegação principal">
          <strong aria-label="Página atual">{content.name}</strong>
          <div className="nav-links">
            <a href="#experience">Experiência</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projetos</a>
            <a href="#activities">Atividades</a>
            <a href="#education">Educação</a>
            <a href="#contact">Contato</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>{content.name}</h1>
        <p><strong>{content.headline}</strong></p>
        <p className="muted">{content.summary}</p>
        <p>{content.location}</p>
        <p>
          <a className="cta" href="#experience">Ver experiência</a>
        </p>
        <p aria-label="Redes sociais">
          <a href={content.social.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
          <a href={content.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{" "}
          {content.social.website ? <a href={content.social.website} target="_blank" rel="noreferrer">Website</a> : <span className="muted">Website</span>}
        </p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title">Experiência</h2>
        <div className="card" role="article">
          <p>
            <strong>Transição de carreira</strong> — Estou migrando de uma trajetória no setor comercial/administrativo para desenvolvimento de software. 
            Atualmente curso Engenharia de Software e aplico conhecimentos em projetos práticos, unindo lógica de programação e foco em entregar valor real ao usuário.
            Trago comunicação clara, disciplina e mentalidade de crescimento para colaborar em equipes técnicas.
          </p>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title">Skills</h2>
        <div className="card">
          <p><strong>Desenvolvimento:</strong> {content.skills.dev.join(", ")}</p>
          <p><strong>Ferramentas:</strong> {content.skills.tools.join(", ")}</p>
          <p><strong>Competências:</strong> {content.skills.comp.join(", ")}</p>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projetos</h2>
        <div className="grid-projects">
          {content.projects.map((p, i) => (
            <article key={i} className="card">
              <h3 style={{marginTop:0}}>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
              <p><a href={p.link} target="_blank" rel="noreferrer">Ver no GitHub</a></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Activities() {
  return (
    <section id="activities" aria-labelledby="activities-title">
      <div className="container">
        <h2 id="activities-title">Atividades</h2>
        <ul className="card" style={{listStyle:"disc", paddingLeft:"26px"}}>
          {content.activities.map((a,i)=>(<li key={i}>{a}</li>))}
        </ul>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" aria-labelledby="education-title">
      <div className="container">
        <h2 id="education-title">Educação</h2>
        <div className="card">
          {content.education.map((e,i)=>(
            <div key={i} style={{marginBottom:"12px"}}>
              <strong>{e.degree}</strong> — {e.institution} <span className="muted">({e.period})</span>
              <ul style={{marginTop:"4px", paddingLeft:"20px"}}>
                {e.highlights.map((h,k)=>(<li key={k}>{h}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Contato</h2>
        <div className="card">
          <p><strong>Email:</strong> <a href={content.email}>weliton.rodrigues29wr@gmail.com</a></p>
          <p>
            <strong>Links:</strong> <a href={content.social.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
            <a href={content.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
          <p className="muted">Última atualização: {content.lastUpdated}</p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header/>
      <main id="main">
        <Hero/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Activities/>
        <Education/>
        <Contact/>
      </main>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} {content.name}. Todos os direitos reservados.
        </div>
      </footer>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
