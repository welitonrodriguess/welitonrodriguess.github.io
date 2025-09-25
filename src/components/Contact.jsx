import { site } from '../data'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <h2 className="h2">Contato</h2>
      <p className="mt-3">Entre em contato por email:</p>
      <a href={`mailto:${site.email}`} className="btn btn-primary mt-4">Enviar Email</a>
    </section>
  )
}
