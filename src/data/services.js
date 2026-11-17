import overseasEmploymentImage from '../assets/images/services/overseas-employment.png'
import passportProcessingImage from '../assets/images/services/passport-processing.png'
import travelVisaProcessingImage from '../assets/images/services/travel-visa-processing.png'
import airTicketBookingImage from '../assets/images/services/air-ticket-booking.png'
import umrahVisaProcessingImage from '../assets/images/services/umrah-visa-processing.png'
import hajjRegistrationImage from '../assets/images/services/hajj-registration.png'

export default [
  {
    id: 'overseas-employment',
    titleKey: 'overseasEmploymentTitle',
    descriptionKey: 'overseasEmploymentDescription',
    image: overseasEmploymentImage,
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
    imageAltKey: 'hajjRegistrationImageAlt',
    icon: 'hajj',
    featureKeys: ['hajjBenefitRegistration', 'hajjBenefitDocuments', 'hajjBenefitGuidance'],
    featured: false,
  },
]
