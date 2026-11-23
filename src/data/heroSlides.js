import professionalOfficeHandshake from '../assets/images/hero/Professional Office Handshake Lounge.webp'
import professionalOfficeHandshakeMobile from '../assets/images/hero/Professional Office Handshake Lounge-mobile.webp'
import southKoreaAgreement from '../assets/images/gallery/south-korea-agreement-signing-ceremony.webp'
import southKoreaAgreementMobile from '../assets/images/gallery/south-korea-agreement-signing-ceremony-mobile.webp'
import airlineCrew from '../assets/images/gallery/professional-airline-crew-portrait.webp'
import airlineCrewMobile from '../assets/images/gallery/professional-airline-crew-portrait-mobile.webp'
import cidbClassroom from '../assets/images/gallery/cidb-malaysia-training-classroom.webp'
import cidbClassroomMobile from '../assets/images/gallery/cidb-malaysia-training-classroom-mobile.webp'
import airportTeam from '../assets/images/gallery/airport-team-departure-group-photo.webp'
import airportTeamMobile from '../assets/images/gallery/airport-team-departure-group-photo-mobile.webp'
import travelAgencyTeam from '../assets/images/gallery/modern-travel-agency-office-team.webp'
import travelAgencyTeamMobile from '../assets/images/gallery/modern-travel-agency-office-team-mobile.webp'
import yellowPoloTeam from '../assets/images/gallery/yellow-polo-team-in-a-modern-office.webp'
import yellowPoloTeamMobile from '../assets/images/gallery/yellow-polo-team-in-a-modern-office-mobile.webp'

export default [
  {
    id: 'professional-office-handshake',
    image: professionalOfficeHandshake,
    imageMobile: professionalOfficeHandshakeMobile,
    altKey: 'southKoreaMeetingAlt',
    imagePosition: 'object-[68%_center] sm:object-center',
    copyIndex: 0,
    width: 1600,
    height: 800,
    primaryRouteKey: 'work-visa',
  },
  {
    id: 'cidb-malaysia-training-classroom',
    image: cidbClassroom,
    imageMobile: cidbClassroomMobile,
    altKey: 'cidbClassroomAlt',
    imagePosition: 'object-center',
    copyIndex: 1,
    width: 1200,
    height: 900,
    primaryRouteKey: 'work-visa',
  },
  {
    id: 'professional-airline-crew',
    image: airlineCrew,
    imageMobile: airlineCrewMobile,
    altKey: 'airlineCrewAlt',
    imagePosition: 'object-center',
    copyIndex: 2,
    width: 1200,
    height: 910,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
  {
    id: 'south-korea-agreement-feature',
    image: southKoreaAgreement,
    imageMobile: southKoreaAgreementMobile,
    altKey: 'southKoreaAgreementAlt',
    imagePosition: 'object-center',
    copyIndex: 3,
    width: 1200,
    height: 900,
    primaryRouteKey: 'work-visa',
  },
  {
    id: 'airport-team-departure',
    image: airportTeam,
    imageMobile: airportTeamMobile,
    altKey: 'airportTeamAlt',
    imagePosition: 'object-center',
    copyIndex: 4,
    width: 1200,
    height: 900,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
  {
    id: 'modern-travel-agency-office-team',
    image: travelAgencyTeam,
    imageMobile: travelAgencyTeamMobile,
    altKey: 'agencyTeamAlt',
    imagePosition: 'object-center',
    copyIndex: 5,
    width: 1200,
    height: 904,
    primaryRouteKey: 'team',
  },
  {
    id: 'yellow-polo-team-modern-office',
    image: yellowPoloTeam,
    imageMobile: yellowPoloTeamMobile,
    altKey: 'yellowTeamAlt',
    imagePosition: 'object-center',
    copyIndex: 6,
    width: 1200,
    height: 900,
    primaryRouteKey: 'work-visa',
  },
]
