import { site } from '../data'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2 className="h2">Projetos</h2>
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        {site.projects.map(p => (
          <div key={p.title} className="card">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm mt-2">{p.desc}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
