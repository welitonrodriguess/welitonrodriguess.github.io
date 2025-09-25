import { site } from '../data'

export default function Experience(){
  return (
    <section id="experience" className="section">
      <h2 className="h2">Experiência</h2>
      <div className="mt-6 space-y-4">
        {site.experience.map(e => (
          <div key={e.role} className="card">
            <h3 className="font-semibold">{e.role} - {e.company}</h3>
            <p className="text-sm opacity-70">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
