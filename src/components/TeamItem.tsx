import { memo } from 'react'

type Props = { name: string }
const TeamItem = memo((props: Props) => {
  const { name } = props
  return <p>{name}</p>
})

export default TeamItem
