import professionalOfficeHandshake from '../assets/images/hero/Professional Office Handshake Lounge.webp'
import professionalOfficeHandshakeMobile from '../assets/images/hero/Professional Office Handshake Lounge-mobile.webp'
import internationalTravelReception from '../assets/images/hero/International Travel Office Reception.webp'
import internationalTravelReceptionMobile from '../assets/images/hero/International Travel Office Reception-mobile.webp'
import globalCareerConsultation from '../assets/images/hero/Global Career Consultation Meeting.webp'
import globalCareerConsultationMobile from '../assets/images/hero/Global Career Consultation Meeting-mobile.webp'

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
    id: 'international-travel-reception',
    image: internationalTravelReception,
    imageMobile: internationalTravelReceptionMobile,
    altKey: 'consultationMeetingAlt',
    imagePosition: 'object-[68%_center] sm:object-center',
    copyIndex: 1,
    width: 1600,
    height: 533,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
  {
    id: 'global-career-consultation',
    image: globalCareerConsultation,
    imageMobile: globalCareerConsultationMobile,
    altKey: 'travelOfficeBannerAlt',
    imagePosition: 'object-center',
    copyIndex: 2,
    width: 1600,
    height: 800,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
]
