import { site } from '../data'

export default function About(){
  return (
    <section id="about" className="section">
      <h2 className="h2">Sobre mim</h2>
      <p className="mt-4">{site.about}</p>
    </section>
  )
}
