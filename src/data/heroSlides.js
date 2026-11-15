import southKoreaMeeting from '../assets/images/optimized/hero/south-korea-meeting.webp'
import consultationMeeting from '../assets/images/optimized/hero/consultation-meeting.webp'
import travelOfficeBanner from '../assets/images/optimized/hero/travel-office-banner.webp'

export default [
  {
    id: 'south-korea-meeting',
    image: southKoreaMeeting,
    altKey: 'southKoreaMeetingAlt',
    imagePosition: 'object-[68%_center] sm:object-center',
    copyIndex: 0,
    width: 1600,
    height: 900,
    primaryRouteKey: 'work-visa',
  },
  {
    id: 'consultation-meeting',
    image: consultationMeeting,
    altKey: 'consultationMeetingAlt',
    imagePosition: 'object-[68%_center] sm:object-center',
    copyIndex: 1,
    width: 1600,
    height: 900,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
  {
    id: 'travel-office-banner',
    image: travelOfficeBanner,
    altKey: 'travelOfficeBannerAlt',
    imagePosition: 'object-center',
    copyIndex: 2,
    width: 1556,
    height: 440,
    primaryRouteKey: 'home',
    primaryHash: '#services',
  },
]
