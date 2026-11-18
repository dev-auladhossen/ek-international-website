import constructionImage from '../assets/images/jobs/Confident Construction Worker on Site-1.webp'
import factoryImage from '../assets/images/jobs/Confident Factory Supervisor at Work-2.webp'
import cleanerImage from '../assets/images/jobs/Friendly Facility Cleaner with Cart-3.webp'
import hospitalityImage from '../assets/images/jobs/Elegant Waiter Presenting Garnished Dish-4.webp'
import petrolImage from '../assets/images/jobs/petrol_pump_attendant.webp'
import plantationImage from '../assets/images/jobs/plantation_worker.webp'
import warehouseImage from '../assets/images/jobs/warehouse_general_worker.webp'
import constructionImageMobile from '../assets/images/jobs/Confident Construction Worker on Site-1-mobile.webp'
import factoryImageMobile from '../assets/images/jobs/Confident Factory Supervisor at Work-2-mobile.webp'
import cleanerImageMobile from '../assets/images/jobs/Friendly Facility Cleaner with Cart-3-mobile.webp'
import hospitalityImageMobile from '../assets/images/jobs/Elegant Waiter Presenting Garnished Dish-4-mobile.webp'
import petrolImageMobile from '../assets/images/jobs/petrol_pump_attendant-mobile.webp'
import plantationImageMobile from '../assets/images/jobs/plantation_worker-mobile.webp'
import warehouseImageMobile from '../assets/images/jobs/warehouse_general_worker-mobile.webp'

export default [
  {
    id: 'construction-technical',
    titleKey: 'constructionTitle',
    descriptionKey: 'constructionDescription',
    icon: 'hardHat',
    tone: 'blue',
    image: constructionImage,
    imageMobile: constructionImageMobile,
    imageAltKey: 'constructionImageAlt',
  },
  {
    id: 'factory-manufacturing',
    titleKey: 'factoryTitle',
    descriptionKey: 'factoryDescription',
    icon: 'factory',
    tone: 'purple',
    image: factoryImage,
    imageMobile: factoryImageMobile,
    imageAltKey: 'factoryImageAlt',
  },
  {
    id: 'cleaning-maintenance',
    titleKey: 'cleaningTitle',
    descriptionKey: 'cleaningDescription',
    icon: 'cleaning',
    tone: 'green',
    image: cleanerImage,
    imageMobile: cleanerImageMobile,
    imageAltKey: 'cleaningImageAlt',
  },
  {
    id: 'hospitality-restaurant',
    titleKey: 'hospitalityTitle',
    descriptionKey: 'hospitalityDescription',
    icon: 'hospitality',
    tone: 'red',
    image: hospitalityImage,
    imageMobile: hospitalityImageMobile,
    imageAltKey: 'hospitalityImageAlt',
  },
  {
    id: 'general-services',
    titleKey: 'generalTitle',
    descriptionKey: 'generalDescription',
    icon: 'general',
    tone: 'cyan',
    images: [
      { src: petrolImage, srcMobile: petrolImageMobile, altKey: 'petrolImageAlt' },
      { src: plantationImage, srcMobile: plantationImageMobile, altKey: 'plantationImageAlt' },
      { src: warehouseImage, srcMobile: warehouseImageMobile, altKey: 'warehouseImageAlt' },
    ],
  },
]
