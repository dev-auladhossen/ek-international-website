export const headerContact = {
  phoneDisplay: "09617-33-66-33",
  phoneHref: "tel:+8809617336633",
  whatsappDisplay: "01811-215487",
  officeContactNumbers: "01805563670–01805563679",
  officeHours: "10:00 AM – 5:00 PM",
  email: "ekinternational.info@gmail.com",
  emailHref: "mailto:ekinternational.info@gmail.com",
  location: "Dhaka, Bangladesh",
  whatsappHref: "https://wa.me/8801811215487",
};

export const officeLocations = [
  {
    id: "uttara",
    labelKey: "address",
    address: "House-38 (4th Floor), Road-17/a, Sector-12, Uttara, Dhaka, Bangladesh",
  },
  {
    id: "ashulia",
    labelKey: "secondOffice",
    address: "Amir Uddin Super Market, 2nd Floor, Nishchintapur, Near Dewan Pump, Ashulia, Zirabo, Savar, Dhaka, Bangladesh",
  },
].map((office) => ({
  ...office,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`,
}));

export const agencyAuthorization = {
  name: "M/S Turag Overseas RL-2612",
};

export const socialPlatforms = [
  { id: "instagram" },
  { id: "youtube" },
  {
    id: "facebook",
    href: "https://www.facebook.com/profile.php?id=100092583310484",
  },
  { id: "linkedin" },
];
