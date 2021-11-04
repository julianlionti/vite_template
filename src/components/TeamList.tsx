import { useAppSelector } from '../hooks/toolkit'
import TeamItem from './TeamItem'

const TeamList = () => {
  const { teams } = useAppSelector((st) => st.teams)
  return (
    <div>
      <p>{`Cantidad de equipos: ${teams.length}`}</p>
      <ul>
        {teams.map((team) => (
          <TeamItem key={team} name={team} />
        ))}
      </ul>
    </div>
  )
}

export default TeamList
