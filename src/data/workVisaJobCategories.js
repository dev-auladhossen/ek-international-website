import constructionImage from '../assets/images/jobs/Confident Construction Worker on Site-1.png'
import factoryImage from '../assets/images/jobs/Confident Factory Supervisor at Work-2.png'
import cleanerImage from '../assets/images/jobs/Friendly Facility Cleaner with Cart-3.png'
import hospitalityImage from '../assets/images/jobs/Elegant Waiter Presenting Garnished Dish-4.png'
import petrolImage from '../assets/images/jobs/petrol_pump_attendant.png'
import plantationImage from '../assets/images/jobs/plantation_worker.png'
import warehouseImage from '../assets/images/jobs/warehouse_general_worker.png'

export default [
  {
    id: 'construction-technical',
    titleKey: 'constructionTitle',
    descriptionKey: 'constructionDescription',
    icon: 'hardHat',
    tone: 'blue',
    image: constructionImage,
    imageAltKey: 'constructionImageAlt',
  },
  {
    id: 'factory-manufacturing',
    titleKey: 'factoryTitle',
    descriptionKey: 'factoryDescription',
    icon: 'factory',
    tone: 'purple',
    image: factoryImage,
    imageAltKey: 'factoryImageAlt',
  },
  {
    id: 'cleaning-maintenance',
    titleKey: 'cleaningTitle',
    descriptionKey: 'cleaningDescription',
    icon: 'cleaning',
    tone: 'green',
    image: cleanerImage,
    imageAltKey: 'cleaningImageAlt',
  },
  {
    id: 'hospitality-restaurant',
    titleKey: 'hospitalityTitle',
    descriptionKey: 'hospitalityDescription',
    icon: 'hospitality',
    tone: 'red',
    image: hospitalityImage,
    imageAltKey: 'hospitalityImageAlt',
  },
  {
    id: 'general-services',
    titleKey: 'generalTitle',
    descriptionKey: 'generalDescription',
    icon: 'general',
    tone: 'cyan',
    images: [
      { src: petrolImage, altKey: 'petrolImageAlt' },
      { src: plantationImage, altKey: 'plantationImageAlt' },
      { src: warehouseImage, altKey: 'warehouseImageAlt' },
    ],
  },
]
