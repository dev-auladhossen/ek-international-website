import overseasEmploymentImage from '../assets/images/services/overseas-employment.webp'
import passportProcessingImage from '../assets/images/services/passport-processing.webp'
import travelVisaProcessingImage from '../assets/images/services/travel-visa-processing.webp'
import airTicketBookingImage from '../assets/images/services/air-ticket-booking.webp'
import umrahVisaProcessingImage from '../assets/images/services/umrah-visa-processing.webp'
import hajjRegistrationImage from '../assets/images/services/hajj-registration.webp'
import overseasEmploymentMobile from '../assets/images/services/overseas-employment-mobile.webp'
import passportProcessingMobile from '../assets/images/services/passport-processing-mobile.webp'
import travelVisaProcessingMobile from '../assets/images/services/travel-visa-processing-mobile.webp'
import airTicketBookingMobile from '../assets/images/services/air-ticket-booking-mobile.webp'
import umrahVisaProcessingMobile from '../assets/images/services/umrah-visa-processing-mobile.webp'
import hajjRegistrationMobile from '../assets/images/services/hajj-registration-mobile.webp'

export default [
  {
    id: 'overseas-employment',
    titleKey: 'overseasEmploymentTitle',
    descriptionKey: 'overseasEmploymentDescription',
    image: overseasEmploymentImage,
    imageMobile: overseasEmploymentMobile,
    imageAltKey: 'overseasEmploymentImageAlt',
    icon: 'workVisa',
    featureKeys: ['employmentBenefitPlacement', 'employmentBenefitDocuments', 'employmentBenefitTravel'],
    featured: true,
  },
  {
    id: 'passport-processing',
    titleKey: 'passportProcessingTitle',
    descriptionKey: 'passportProcessingDescription',
    image: passportProcessingImage,
    imageMobile: passportProcessingMobile,
    imageAltKey: 'passportProcessingImageAlt',
    icon: 'passport',
    featureKeys: ['passportBenefitApplication', 'passportBenefitRenewal', 'passportBenefitReissue'],
    featured: true,
  },
  {
    id: 'travel-visa-processing',
    titleKey: 'travelVisaProcessingTitle',
    descriptionKey: 'travelVisaProcessingDescription',
    image: travelVisaProcessingImage,
    imageMobile: travelVisaProcessingMobile,
    imageAltKey: 'travelVisaProcessingImageAlt',
    icon: 'travelVisa',
    featureKeys: ['travelVisaBenefitTourist', 'travelVisaBenefitBusiness', 'travelVisaBenefitVisit'],
    featured: true,
  },
  {
    id: 'air-ticket-booking',
    titleKey: 'airTicketBookingTitle',
    descriptionKey: 'airTicketBookingDescription',
    image: airTicketBookingImage,
    imageMobile: airTicketBookingMobile,
    imageAltKey: 'airTicketBookingImageAlt',
    icon: 'airTicket',
    featureKeys: ['airTicketBenefitInternational', 'airTicketBenefitDomestic', 'airTicketBenefitFare'],
    featured: true,
  },
  {
    id: 'umrah-visa-processing',
    titleKey: 'umrahVisaProcessingTitle',
    descriptionKey: 'umrahVisaProcessingDescription',
    image: umrahVisaProcessingImage,
    imageMobile: umrahVisaProcessingMobile,
    imageAltKey: 'umrahVisaProcessingImageAlt',
    icon: 'umrah',
    featureKeys: ['umrahBenefitApplication', 'umrahBenefitDocuments', 'umrahBenefitPreparation'],
    featured: false,
  },
  {
    id: 'hajj-registration',
    titleKey: 'hajjRegistrationTitle',
    descriptionKey: 'hajjRegistrationDescription',
    image: hajjRegistrationImage,
    imageMobile: hajjRegistrationMobile,
    imageAltKey: 'hajjRegistrationImageAlt',
    icon: 'hajj',
    featureKeys: ['hajjBenefitRegistration', 'hajjBenefitDocuments', 'hajjBenefitGuidance'],
    featured: false,
  },
]
