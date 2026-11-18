import professionalOfficeHandshake from '../assets/images/hero/Professional Office Handshake Lounge.jpg'
import internationalTravelReception from '../assets/images/hero/International Travel Office Reception.jpg'
import globalCareerConsultation from '../assets/images/hero/Global Career Consultation Meeting.jpg'

export default [
  {
    id: 'professional-office-handshake',
    image: professionalOfficeHandshake,
    altKey: 'southKoreaMeetingAlt',
    imagePosition: 'object-[68%_center] sm:object-center',
    copyIndex: 0,
    width: 1774,
    height: 887,
    primaryRouteKey: 'work-visa',
  },
  {
    id: 'international-travel-reception',
    image: internationalTravelReception,
    altKey: 'consultationMeetingAlt',
    imagePosition: 'object-[68%_center] sm:object-center',
    copyIndex: 1,
    width: 2172,
    height: 724,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
  {
    id: 'global-career-consultation',
    image: globalCareerConsultation,
    altKey: 'travelOfficeBannerAlt',
    imagePosition: 'object-center',
    copyIndex: 2,
    width: 1774,
    height: 887,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
]
