import { site } from '../data'

export default function Navbar(){
  return (
    <header className="section flex justify-between items-center">
      <span className="font-bold">{site.name}</span>
      <nav className="flex gap-4 text-sm">
        <a href="#projects">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experiência</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}
