import { useLoaderData } from 'react-router-dom'
import Guides from '../../../components/Guide/Guide'
import { guideDataInterface } from '../GuideInterfaces'


function GuideDetails() {
  const guide : guideDataInterface = useLoaderData() as guideDataInterface
  return (
    <>
      <main className='page-content'>
        <Guides 
          id={guide.id}
          firstName={guide.firstName} 
          lastName={guide.lastName} 
          started={guide.started}
          level={guide.level}
          location={guide.location} 
          headshot={guide.headshot} 
          bio={guide.bio}
          venmoImage={guide.venmoImage}
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