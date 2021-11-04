import { ChangeEvent, useState } from 'react'
import { Button } from '../components/Button'
import HorizontalDiv from '../components/common/HorizontalDiv'
import TeamList from '../components/TeamList'
import { useAppDispatch } from '../hooks/toolkit'
import { add } from '../reducers/teamsSlice'

const ReduxToolkitPage = () => {
  const dispatch = useAppDispatch()

  const [name, setName] = useState('')
  const handleAdd = () => {
    dispatch(add(name))
    setName('')
  }

  const handleTeamChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setName(ev.target.value)

  return (
    <div>
      <p>Redux Toolkit example</p>
      <p>Agregar equipo a la liga</p>
      <HorizontalDiv>
        <div>
          <input
            value={name}
            onChange={handleTeamChange}
            placeholder="Nombre del equipo"
          />
          <Button onClick={handleAdd}>Agregar equipo</Button>
        </div>
        <TeamList />
      </HorizontalDiv>
    </div>
  )
}

export default ReduxToolkitPage
