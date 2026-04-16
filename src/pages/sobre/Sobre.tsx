import { AboutHero } from '../../components/sobre/AboutHero'
import { AboutProject } from '../../components/sobre/AboutProject'
import { ProblemSolution } from '../../components/sobre/ProblemSolution'
import { Team } from '../../components/sobre/Team'

export function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <AboutHero />

      <ProblemSolution />

      <div className="w-full h-16 bg-linear-to-b from-transparent to-bg" />

      <AboutProject />


      <Team/>
      
    </div>
  )
}