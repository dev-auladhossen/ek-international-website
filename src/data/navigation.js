export const primaryNavigation = [
  { id: 'home', routeKey: 'home', labelKey: 'home' },
  { id: 'about', routeKey: 'about', labelKey: 'aboutUs' },
  { id: 'services', routeKey: 'services', labelKey: 'servicesHeader' },
  {
    id: 'workVisa',
    routeKey: 'work-visa',
    labelKey: 'workVisaHeader',
  },
  { id: 'hajjUmrah', routeKey: 'hajj-umrah', labelKey: 'hajjUmrah' },
  { id: 'team', routeKey: 'team', labelKey: 'team' },
  { id: 'contact', routeKey: 'contact', labelKey: 'contactUs' },
  {
    id: 'more',
    routeKey: 'home',
    hash: '#destinations',
    labelKey: 'more',
    submenu: [
      { id: 'destinations', routeKey: 'destinations', labelKey: 'destinations' },
      { id: 'faq', routeKey: 'home', hash: '#faq', labelKey: 'faq' },
      { id: 'gallery', routeKey: 'gallery', labelKey: 'gallery' },
    ],
  },
]

export const contactChannels = [
  { id: 'phone' },
  { id: 'email' },
  { id: 'address' },
]

export const footerQuickNavigation = [
  { id: 'about', routeKey: 'about', labelKey: 'aboutUs' },
  { id: 'workVisa', routeKey: 'work-visa', labelKey: 'workVisaHeader' },
  { id: 'hajjUmrah', routeKey: 'hajj-umrah', labelKey: 'hajjUmrah' },
  { id: 'team', routeKey: 'team', labelKey: 'team' },
  { id: 'terms', routeKey: 'terms', labelKey: 'termsAndConditions' },
  { id: 'privacy', routeKey: 'privacy', labelKey: 'privacyPolicy' },
]

export const footerBottomNavigation = [
  { id: 'home', routeKey: 'home', labelKey: 'home' },
  { id: 'about', routeKey: 'about', labelKey: 'aboutUs' },
  { id: 'contact', routeKey: 'contact', labelKey: 'contactUs' },
]

export const footerServiceNavigation = [
  { id: 'workVisa', routeKey: 'work-visa', labelKey: 'workVisaHeader' },
  { id: 'destinations', routeKey: 'home', hash: '#destinations', labelKey: 'destinations' },
  { id: 'hajjUmrah', routeKey: 'hajj-umrah', labelKey: 'hajjUmrah' },
  { id: 'faq', routeKey: 'home', hash: '#faq', labelKey: 'faq' },
]
