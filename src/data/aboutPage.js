import workVisaImage from '../assets/images/optimized/hero/south-korea-meeting.webp'
import visaImage from '../assets/images/optimized/services/office-consultation-passport.webp'
import travelImage from '../assets/images/optimized/hero/travel-office-banner.webp'
import hajjImage from '../assets/images/optimized/hero/airport-pilgrimage.webp'
import whoWeAreImage from '../assets/images/optimized/hero/consultation-meeting.webp'

export const aboutImages = {
  whoWeAre: whoWeAreImage,
}

export const aboutServices = [
  { id: 'employment', titleKey: 'serviceEmploymentTitle', descriptionKey: 'serviceEmploymentDescription', image: workVisaImage, imageAltKey: 'serviceEmploymentAlt', icon: 'employment' },
  { id: 'visa', titleKey: 'serviceVisaTitle', descriptionKey: 'serviceVisaDescription', image: visaImage, imageAltKey: 'serviceVisaAlt', icon: 'visa' },
  { id: 'travel', titleKey: 'serviceTravelTitle', descriptionKey: 'serviceTravelDescription', image: travelImage, imageAltKey: 'serviceTravelAlt', icon: 'travel' },
  { id: 'hajj-umrah', titleKey: 'serviceHajjTitle', descriptionKey: 'serviceHajjDescription', image: hajjImage, imageAltKey: 'serviceHajjAlt', icon: 'hajj' },
]

export const commitmentValues = [
  { id: 'guidance', titleKey: 'guidanceTitle', descriptionKey: 'guidanceDescription', icon: 'guidance' },
  { id: 'documentation', titleKey: 'documentationTitle', descriptionKey: 'documentationDescription', icon: 'documentation' },
  { id: 'communication', titleKey: 'communicationTitle', descriptionKey: 'communicationDescription', icon: 'communication' },
  { id: 'assistance', titleKey: 'assistanceTitle', descriptionKey: 'assistanceDescription', icon: 'assistance' },
]

export const aboutProcess = [
  { id: 'consultation', titleKey: 'consultationTitle', descriptionKey: 'consultationDescription', icon: 'consultation' },
  { id: 'guidance', titleKey: 'guidanceStepTitle', descriptionKey: 'guidanceStepDescription', icon: 'guidance' },
  { id: 'documentation', titleKey: 'documentationStepTitle', descriptionKey: 'documentationStepDescription', icon: 'documentation' },
  { id: 'application', titleKey: 'applicationTitle', descriptionKey: 'applicationDescription', icon: 'application' },
  { id: 'follow-up', titleKey: 'followUpTitle', descriptionKey: 'followUpDescription', icon: 'followUp' },
]

