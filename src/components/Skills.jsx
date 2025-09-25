import { site } from '../data'

export default function Skills(){
  return (
    <section id="skills" className="section">
      <h2 className="h2">Skills</h2>
      <div className="flex gap-2 flex-wrap mt-4">
        {site.skills.map(s => <span key={s} className="badge">{s}</span>)}
      </div>
    </section>
  )
}
