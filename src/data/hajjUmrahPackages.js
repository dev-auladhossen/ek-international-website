import goldenTawaf from "../assets/images/hajj&umrah/Masjid al-Haram at Sunset-5.webp";
import goldenTawafMobile from "../assets/images/hajj&umrah/Masjid al-Haram at Sunset-5-mobile.webp";
import goldenKaaba from "../assets/images/hajj&umrah/Golden Sunset at the Kaaba-1.webp";
import goldenKaabaMobile from "../assets/images/hajj&umrah/Golden Sunset at the Kaaba-1-mobile.webp";
import mosqueCorridor from "../assets/images/hajj&umrah/Grand Mosque Pilgrimage Corridor-4.webp";
import mosqueCorridorMobile from "../assets/images/hajj&umrah/Grand Mosque Pilgrimage Corridor-4-mobile.webp";
import prophetMosque from "../assets/images/hajj&umrah/Sunset at the Prophet’s Mosque-3.webp";
import prophetMosqueMobile from "../assets/images/hajj&umrah/Sunset at the Prophet’s Mosque-3-mobile.webp";

export default [
  {
    id: "standard-umrah",
    category: "umrah",
    nameKey: "standardUmrahName",
    typeKey: "standardType",
    serviceKey: "umrahService",
    statusKey: "bookingOngoing",
    priceLabelKey: "packagePrice",
    price: "৳100,000",
    detailsKey: "packageInformationPending",
    image: goldenTawaf,
    imageMobile: goldenTawafMobile,
    imageWidth: 1400,
    imageAltKey: "standardUmrahImageAlt",
  },
  {
    id: "premium-umrah",
    category: "umrah",
    nameKey: "premiumUmrahName",
    typeKey: "premiumType",
    serviceKey: "umrahService",
    statusKey: "bookingOngoing",
    priceLabelKey: "packagePrice",
    price: "৳150,000",
    detailsKey: "packageInformationPending",
    image: goldenKaaba,
    imageMobile: goldenKaabaMobile,
    imageWidth: 1400,
    imageAltKey: "premiumUmrahImageAlt",
  },
  {
    id: "gold-classic-hajj",
    category: "hajj",
    nameKey: "goldClassicHajjName",
    typeKey: "hajjType",
    serviceKey: "hajjService",
    statusKey: "customizableAvailability",
    priceLabelKey: "startingFrom",
    price: "৳820,000",
    duration: "42–45 days",
    detailsKey: "goldClassicHajjDetails",
    image: mosqueCorridor,
    imageMobile: mosqueCorridorMobile,
    imageWidth: 1400,
    imageAltKey: "hajjPackageImageAlt",
  },
  {
    id: "classic-hajj",
    category: "hajj",
    nameKey: "classicHajjName",
    typeKey: "hajjType",
    serviceKey: "hajjService",
    statusKey: "customizableAvailability",
    priceLabelKey: "startingFrom",
    price: "৳680,000",
    duration: "42–45 days",
    detailsKey: "classicHajjDetails",
    image: prophetMosque,
    imageMobile: prophetMosqueMobile,
    imageWidth: 1600,
    imageAltKey: "hajjPackageImageAlt",
  },
];
