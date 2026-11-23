import professionalOfficeHandshake from '../assets/images/hero/Professional Office Handshake Lounge.webp'
import professionalOfficeHandshakeMobile from '../assets/images/hero/Professional Office Handshake Lounge-mobile.webp'
import globalCareerConsultation from '../assets/images/hero/Global Career Consultation Meeting.webp'
import globalCareerConsultationMobile from '../assets/images/hero/Global Career Consultation Meeting-mobile.webp'
import internationalTravelReception from '../assets/images/hero/International Travel Office Reception.webp'
import internationalTravelReceptionMobile from '../assets/images/hero/International Travel Office Reception-mobile.webp'
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
    id: 'global-career-consultation',
    image: globalCareerConsultation,
    imageMobile: globalCareerConsultationMobile,
    altKey: 'travelOfficeBannerAlt',
    imagePosition: 'object-center',
    copyIndex: 1,
    width: 1600,
    height: 800,
    primaryRouteKey: 'home',
    primaryHash: '#services',
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
    id: 'international-travel-office-reception',
    image: internationalTravelReception,
    imageMobile: internationalTravelReceptionMobile,
    altKey: 'consultationMeetingAlt',
    imagePosition: 'object-[68%_center] sm:object-center',
    copyIndex: 3,
    width: 1600,
    height: 533,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
  {
    id: 'cidb-malaysia-training-classroom',
    image: cidbClassroom,
    imageMobile: cidbClassroomMobile,
    altKey: 'cidbClassroomAlt',
    imagePosition: 'object-center',
    copyIndex: 4,
    width: 1200,
    height: 900,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
  {
    id: 'airport-team-departure-followup',
    image: airportTeam,
    imageMobile: airportTeamMobile,
    altKey: 'airportTeamAlt',
    imagePosition: 'object-center',
    copyIndex: 5,
    width: 1200,
    height: 900,
    primaryRouteKey: 'home',
    primaryHash: '#services',
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
