import { useLoaderData } from 'react-router-dom'
import Guides from '../../../components/Guide/Guide'
import { guideDataInterface } from '../GuideInterfaces'
import PageTitle from '../../../components/Title/PageTitle'

function GuideDetails() {
  const guide : guideDataInterface = useLoaderData() as guideDataInterface
  PageTitle(`${guide.firstName} ${guide.lastName}`, `Meet ${guide.firstName}, a professional Bronco Off-Roadeo Guide at the ${guide.location} location. Experience and passion for off-road adventure.`)
  return (
    <>
      <main className='page-content'>
        <Guides 
          id={guide.id}
          firstName={guide.firstName} 
          lastName={guide.lastName} 
          started={guide.started}
          location={guide.location} 
          headshot={guide.headshot} 
          bio={guide.bio}
          venmoLink={guide.venmoLink}
          xLink={guide.xLink}
          fblink={guide.fblink}
          instaLink={guide.instaLink}
          youTubeLink={guide.youTubeLink}
          linkedInLink={guide.linkedInLink}
          email={guide.email}
          >  
        </Guides>
      </main>
    </>
  )
}

export default GuideDetails

// id: number,
// firstName: string,
// lastName?: string,
// started?: string,
// level: string,
// location: string,
// bio: string[],
// headshot?: string,
// venmoLink?: string,