import { useLoaderData } from 'react-router-dom'
import Guides from '../../../components/Guide/Guide'
import { guideDataInterface } from '../GuideInterfaces'
import Title from '../../../components/Title/Title'


function GuideDetails() {
  const guide : guideDataInterface = useLoaderData() as guideDataInterface
  Title(guide.firstName)
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