import { useLoaderData } from 'react-router-dom'
import Guides from '../../../components/Guide/Guide'

function GuideDetails() {
  const guide : {id: number, firstName: string, location: string, bio: string} = useLoaderData() as typeof guide
  return (
    <>
      <Guides name={guide.firstName} location={guide.location} bio={guide.bio}></Guides>

    </>
  )
}

export default GuideDetails