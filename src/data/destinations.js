import australia from '../assets/images/optimized/destinations/aus.webp'
import australiaMobile from '../assets/images/optimized/destinations/aus-mobile.webp'
import cambodia from '../assets/images/optimized/destinations/cambodia.webp'
import cambodiaMobile from '../assets/images/optimized/destinations/cambodia-mobile.webp'
import france from '../assets/images/optimized/destinations/france.webp'
import franceMobile from '../assets/images/optimized/destinations/france-mobile.webp'
import hungary from '../assets/images/optimized/destinations/hungary.webp'
import hungaryMobile from '../assets/images/optimized/destinations/hungary-mobile.webp'
import italy from '../assets/images/optimized/destinations/italy.webp'
import italyMobile from '../assets/images/optimized/destinations/italy-mobile.webp'
import malaysia from '../assets/images/optimized/destinations/malaysia.webp'
import malaysiaMobile from '../assets/images/optimized/destinations/malaysia-mobile.webp'
import poland from '../assets/images/optimized/destinations/poland.webp'
import polandMobile from '../assets/images/optimized/destinations/poland-mobile.webp'
import portugal from '../assets/images/optimized/destinations/portugal.webp'
import portugalMobile from '../assets/images/optimized/destinations/portugal-mobile.webp'
import qatar from '../assets/images/optimized/destinations/qatar.webp'
import qatarMobile from '../assets/images/optimized/destinations/qatar-mobile.webp'
import romania from '../assets/images/optimized/destinations/romania.webp'
import romaniaMobile from '../assets/images/optimized/destinations/romania-mobile.webp'
import saudiArabia from '../assets/images/optimized/destinations/saudi-arabia.webp'
import saudiArabiaMobile from '../assets/images/optimized/destinations/saudi-arabia-mobile.webp'
import serbia from '../assets/images/optimized/destinations/serbia.webp'
import serbiaMobile from '../assets/images/optimized/destinations/serbia-mobile.webp'
import singapore from '../assets/images/optimized/destinations/singapore.webp'
import singaporeMobile from '../assets/images/optimized/destinations/singapore-mobile.webp'
import italyFlag from '../assets/images/destinations/Italy-small.png'
import malaysiaFlag from '../assets/images/destinations/Malaysia-small.png'
import singaporeFlag from '../assets/images/destinations/Singapore-small.png'
import uaeFlag from '../assets/images/destinations/UAE-small.png'
import saudiArabiaFlag from '../assets/images/destinations/Saudi-Arabia-small.png'
import cambodiaFlag from '../assets/images/destinations/Cambodia-small.png'
import thailandFlag from '../assets/images/destinations/Thailand-small.png'
import turkeyFlag from '../assets/images/destinations/turkey-small.png'
import australiaFlag from '../assets/images/destinations/australia.png'
import franceFlag from '../assets/images/destinations/france.png'
import hungaryFlag from '../assets/images/destinations/hungary.png'
import polandFlag from '../assets/images/destinations/poland.png'
import portugalFlag from '../assets/images/destinations/portugal.png'
import qatarFlag from '../assets/images/destinations/qatar.png'
import romaniaFlag from '../assets/images/destinations/romania.png'
import serbiaFlag from '../assets/images/destinations/serbia.png'
import ukFlag from '../assets/images/destinations/uk.png'
import usaFlag from '../assets/images/destinations/usa.png'
import uae from '../assets/images/optimized/destinations/uae.webp'
import uaeMobile from '../assets/images/optimized/destinations/uae-mobile.webp'
import thailand from '../assets/images/destinations/06_Thailand.webp'
import thailandMobile from '../assets/images/destinations/06_Thailand-mobile.webp'
import unitedKingdom from '../assets/images/optimized/destinations/uk.webp'
import unitedKingdomMobile from '../assets/images/optimized/destinations/uk-mobile.webp'
import unitedStates from '../assets/images/optimized/destinations/usa.webp'
import unitedStatesMobile from '../assets/images/optimized/destinations/usa-mobile.webp'
import turkey from '../assets/images/optimized/destinations/turkey.webp'
import turkeyMobile from '../assets/images/optimized/destinations/turkey-mobile.webp'

const destinationDirectory = [
  { id: 'portugal', nameEn: 'Portugal', nameBn: 'পর্তুগাল', image: portugal, flagImage: portugalFlag, altEn: 'Landmark in Portugal', altBn: 'পর্তুগালের একটি দর্শনীয় স্থান' },
  { id: 'poland', nameEn: 'Poland', nameBn: 'পোল্যান্ড', image: poland, flagImage: polandFlag, altEn: 'Landmark in Poland', altBn: 'পোল্যান্ডের একটি দর্শনীয় স্থান' },
  { id: 'hungary', nameEn: 'Hungary', nameBn: 'হাঙ্গেরি', image: hungary, flagImage: hungaryFlag, altEn: 'Landmark in Hungary', altBn: 'হাঙ্গেরির একটি দর্শনীয় স্থান' },
  { id: 'italy', nameEn: 'Italy', nameBn: 'ইতালি', image: italy, flagImage: italyFlag, altEn: 'The Colosseum in Italy', altBn: 'ইতালির কলোসিয়াম' },
  { id: 'romania', nameEn: 'Romania', nameBn: 'রোমানিয়া', image: romania, flagImage: romaniaFlag, altEn: 'Landmark in Romania', altBn: 'রোমানিয়ার একটি দর্শনীয় স্থান' },
  { id: 'serbia', nameEn: 'Serbia', nameBn: 'সার্বিয়া', image: serbia, flagImage: serbiaFlag, altEn: 'Landmark in Serbia', altBn: 'সার্বিয়ার একটি দর্শনীয় স্থান' },
  { id: 'cambodia', nameEn: 'Cambodia', nameBn: 'কম্বোডিয়া', image: cambodia, flagImage: cambodiaFlag, altEn: 'Angkor Wat in Cambodia', altBn: 'কম্বোডিয়ার আংকর ওয়াট' },
  { id: 'saudi-arabia', nameEn: 'Saudi Arabia', nameBn: 'সৌদি আরব', image: saudiArabia, flagImage: saudiArabiaFlag, altEn: 'Riyadh skyline in Saudi Arabia', altBn: 'সৌদি আরবের রিয়াদ শহরের আকাশরেখা' },
  { id: 'uae', nameEn: 'UAE', nameBn: 'সংযুক্ত আরব আমিরাত', image: uae, flagImage: uaeFlag, altEn: 'Dubai skyline in the United Arab Emirates', altBn: 'সংযুক্ত আরব আমিরাতের দুবাই শহরের আকাশরেখা' },
  { id: 'malaysia', nameEn: 'Malaysia', nameBn: 'মালয়েশিয়া', image: malaysia, flagImage: malaysiaFlag, altEn: 'Petronas Twin Towers in Malaysia', altBn: 'মালয়েশিয়ার পেট্রোনাস টুইন টাওয়ার' },
  { id: 'qatar', nameEn: 'Qatar', nameBn: 'কাতার', image: qatar, flagImage: qatarFlag, altEn: 'Doha skyline in Qatar', altBn: 'কাতারের দোহা শহরের আকাশরেখা' },
  { id: 'singapore', nameEn: 'Singapore', nameBn: 'সিঙ্গাপুর', image: singapore, flagImage: singaporeFlag, altEn: 'Marina Bay in Singapore', altBn: 'সিঙ্গাপুরের মেরিনা বে' },
  { id: 'thailand', nameEn: 'Thailand', nameBn: 'থাইল্যান্ড', image: thailand, flagImage: thailandFlag, altEn: 'Temple architecture in Thailand', altBn: 'থাইল্যান্ডের মন্দিরের স্থাপত্য' },
  { id: 'france', nameEn: 'France', nameBn: 'ফ্রান্স', image: france, flagImage: franceFlag, altEn: 'Landmark in France', altBn: 'ফ্রান্সের একটি দর্শনীয় স্থান' },
  { id: 'australia', nameEn: 'Australia', nameBn: 'অস্ট্রেলিয়া', image: australia, flagImage: australiaFlag, altEn: 'Landmark in Australia', altBn: 'অস্ট্রেলিয়ার একটি দর্শনীয় স্থান' },
  { id: 'united-kingdom', nameEn: 'United Kingdom', nameBn: 'যুক্তরাজ্য', image: unitedKingdom, flagImage: ukFlag, altEn: 'Landmark in the United Kingdom', altBn: 'যুক্তরাজ্যের একটি দর্শনীয় স্থান' },
  { id: 'united-states', nameEn: 'United States', nameBn: 'যুক্তরাষ্ট্র', image: unitedStates, flagImage: usaFlag, altEn: 'Landmark in the United States', altBn: 'যুক্তরাষ্ট্রের একটি দর্শনীয় স্থান' },
  { id: 'turkey', nameEn: 'Turkey', nameBn: 'তুরস্ক', image: turkey, flagImage: turkeyFlag, altEn: 'Landmark in Turkey', altBn: 'তুরস্কের একটি দর্শনীয় স্থান' },
]

const homeDestinationOrder = [
  'singapore',
  'italy',
  'malaysia',
  'united-states',
  'france',
  'australia',
  'turkey',
]

const mobileDestinationImages = {
  australia: australiaMobile,
  cambodia: cambodiaMobile,
  france: franceMobile,
  hungary: hungaryMobile,
  italy: italyMobile,
  malaysia: malaysiaMobile,
  poland: polandMobile,
  portugal: portugalMobile,
  qatar: qatarMobile,
  romania: romaniaMobile,
  'saudi-arabia': saudiArabiaMobile,
  serbia: serbiaMobile,
  singapore: singaporeMobile,
  uae: uaeMobile,
  thailand: thailandMobile,
  'united-kingdom': unitedKingdomMobile,
  'united-states': unitedStatesMobile,
  turkey: turkeyMobile,
}

const responsiveDestinationDirectory = destinationDirectory.map((destination) => ({
  ...destination,
  imageMobile: mobileDestinationImages[destination.id] ?? destination.image,
}))

export { responsiveDestinationDirectory as destinationDirectory }
export default homeDestinationOrder.map((id) =>
  responsiveDestinationDirectory.find((destination) => destination.id === id),
)
