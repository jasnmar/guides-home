import { useLoaderData } from 'react-router-dom'
import Guide from '../../../components/Guide/Guide'

function GuideDetails() {
  const guide : {id: number, firstName: string, location: string, bio: string} = useLoaderData()
  return (
    <>
      <Guide name={guide.firstName} location={guide.location} bio={guide.bio}/>

    </>
  )
}

export default GuideDetails