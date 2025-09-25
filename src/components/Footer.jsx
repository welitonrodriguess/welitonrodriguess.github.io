import { site } from '../data'

export default function Footer(){
  return (
    <footer className="section text-sm text-center opacity-70">
      © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
    </footer>
  )
}
