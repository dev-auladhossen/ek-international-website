export const primaryNavigation = [
  { id: 'home', routeKey: 'home', labelKey: 'home' },
  { id: 'about', routeKey: 'home', hash: '#about', labelKey: 'aboutUs' },
  {
    id: 'workVisa',
    routeKey: 'home',
    hash: '#destinations',
    labelKey: 'workVisaHeader',
    submenu: [
      { id: 'workVisaOverview', routeKey: 'work-visa', labelKey: 'workVisaOverview' },
      { id: 'destinations', routeKey: 'home', hash: '#destinations', labelKey: 'destinations' },
    ],
  },
  { id: 'hajjUmrah', routeKey: 'home', hash: '#hajj-umrah', labelKey: 'hajjUmrah' },
  { id: 'team', routeKey: 'home', hash: '#team', labelKey: 'team' },
  { id: 'faq', routeKey: 'home', hash: '#faq', labelKey: 'faq' },
  { id: 'contact', routeKey: 'home', hash: '#contact', labelKey: 'contactUs' },
]

export const contactChannels = [
  { id: 'phone' },
  { id: 'email' },
  { id: 'address' },
]

export const footerQuickNavigation = [
  { id: 'home', routeKey: 'home', labelKey: 'home' },
  { id: 'about', routeKey: 'about', labelKey: 'aboutUs' },
  { id: 'team', routeKey: 'team', labelKey: 'team' },
  { id: 'contact', routeKey: 'contact', labelKey: 'contactUs' },
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
