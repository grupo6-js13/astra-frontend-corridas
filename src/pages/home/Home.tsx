import { CTA } from '../../components/home/CTA'
import { Hero } from '../../components/home/Hero'
import { Intro } from '../../components/home/Intro'

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">

      <Hero />
      <Intro />
      <CTA />
    </div>
  )
}