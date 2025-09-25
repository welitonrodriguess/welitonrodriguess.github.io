import { site } from '../data'

export default function Hero(){
  return (
    <section className="section text-center">
      <h1 className="h1">{site.hero.title}</h1>
      <p className="lead mt-4">{site.hero.subtitle}</p>
    </section>
  )
}
