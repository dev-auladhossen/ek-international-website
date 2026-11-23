import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import DestinationsPage from '../pages/DestinationsPage.vue'
import HajjUmrahPage from '../pages/HajjUmrahPage.vue'
import HomePage from '../pages/HomePage.vue'
import GalleryPage from '../pages/GalleryPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import PolicyPage from '../pages/PolicyPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import TeamPage from '../pages/TeamPage.vue'
import WorkVisaPage from '../pages/WorkVisaPage.vue'

const localizedPages = [
  { key: 'home', segment: '', component: HomePage },
  { key: 'about', segment: 'about', component: AboutPage },
  { key: 'team', segment: 'team', component: TeamPage },
  { key: 'gallery', segment: 'gallery', component: GalleryPage },
  { key: 'terms', segment: 'terms-and-conditions', component: PolicyPage },
  { key: 'privacy', segment: 'privacy-policy', component: PolicyPage },
  { key: 'services', segment: 'services', component: ServicesPage },
  { key: 'destinations', segment: 'destinations', component: DestinationsPage },
  { key: 'workVisa', segment: 'work-visa', component: WorkVisaPage },
  { key: 'hajjUmrah', segment: 'hajj-umrah', component: HajjUmrahPage },
  { key: 'contact', segment: 'contact', component: ContactPage },
  { key: 'notFound', segment: '404', component: NotFoundPage },
]

const locales = ['en', 'bn']

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { locale: 'en', pageKey: 'home' },
  },
  ...locales.flatMap((locale) => localizedPages.map(({ key, segment, component }) => ({
    path: `/${locale}/${segment ? `${segment}/` : ''}`,
    name: `${locale}-${key === 'notFound' ? 'not-found' : key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`,
    component,
    meta: { locale, pageKey: key },
  }))),
  {
    path: '/404/',
    name: 'not-found-page',
    component: NotFoundPage,
    meta: { locale: 'en', pageKey: 'notFound' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: { pageKey: 'notFound' },
  },
]
