import {
  bobaIsLife,
  groupCheers,
  group,
  bobaPackaged,
  standSetup,
  barista,
} from '../assets';
import { google, micron, kpmg, sjsu, zip } from '../assets';

export const navigation = [
  { id: '0', title: 'About', url: '/about', href: '#about' },
  { id: '1', title: 'Services', url: '/services', href: '#services' },
  // { id: '2', title: 'Pricing', url: '/pricing', href: '#pricing' },
  // { id: '3', title: 'Menu', url: '/menu', href: '#menu' },
];
export const hero = {
  img: bobaIsLife,
  heading: `Make your next event packed with flavor and fun by catering with`,
  brandName: 'tarosbobabar',
  subheading: 'Make your next event a Par-Tea!',
  subheading2: 'Your one stop shop for boba catering in the Bar Area!',
  reactTyped: {
    strings: ['Birthdays!', 'Weddings!', 'Company Parties!', 'Baby Showers!'],
    classes:
      'lg:text-6xl md:text-5xl text-[2.8rem] leading-[3rem] font-bold h-[70px] sm:h-full playfair',
  },
};
export const about = {
  id: 'about',
  heading: 'Learn more about us!',
  subheading: 'Who we are',
  content:
    "Taro's Boba Bar offer boba catering services that covers the entire Bay Area! At Taro's Mobile Boba Bar, we offer various milk teas and fruit teas along with everything you need to impress your friends, coworkers, or boss! Let us help you bring the par-TEA to your next event!",
  img: groupCheers,
};

export const whyCater = [
  {
    id: 'cater',
    heading: 'Why Cater Boba?',
    content:
      "Boba catering is the new trend at events these days, and for good reason! It adds a delicious and fun vibe to any gathering. With loads of options like different teas, flavors, and toppings, there's something for everyone to enjoy. Plus, it's not just about the taste &#8208; the colorful and Instagram-friendly look of boba drinks adds a cool factor to your event. So, why not jump on the boba bandwagon? It's not just a drink; it's a tasty and trendy experience that your guests will love!",
    img: group,
  },
];

export const cateredCompanies = [
  { id: '0', title: 'Micron Technology', logo: micron },
  { id: '1', title: 'Zip', logo: zip },
  { id: '2', title: 'Google', logo: google },
  { id: '3', title: 'San Jose State University', logo: sjsu },
  { id: '4', title: 'KPMG', logo: kpmg },
];

export const services = [
  {
    id: 'service-1',
    title: 'Full Self-Serve Boba Station',
    pricing: 'Price Starting at $400',
    detail: 'Our team will set up a self-serve boba tea station at your event.',
    img: barista,
  },
  {
    id: 'service-2',
    title: 'Delivery Drop-Off',
    pricing: 'Price starting at $6 per drink',
    detail:
      'We prepare and seal the drinks at our location and deliver them to your event. All you have to do is serve them.',
    img: bobaPackaged,
  },
  {
    id: 'service-3',
    title: 'Premium On-Site',
    pricing: 'Coming Soon!',
    detail:
      'Includes the Full Service On-Site plus additional features like a wider selection of flavors and customization options.',
    img: standSetup,
  },
];

export const detailedServices = [
  {
    id: 'service-1',
    title: 'Small Pack',
    subtitle: 'Idea for small gatherings',
    price: '$400',
    details: [
      'Services 20-40 Guests',
      'Three Gallons Total',
      'Choose Up To 3 Flavors',
      '12oz Refillable Cups',
      'Aesthetic Decorations',
      'Set Up & Clean Up',
    ],
  },
  {
    id: 'service-2',
    title: 'Medium Pack',
    subtitle: 'Ideal for medium events',
    price: '$625',
    details: [
      'Services 50-70 Guests',
      'Six Gallons Total',
      'Choose Up To 3 Flavors',
      '12oz Refillable Cups',
      'Aesthetic Decorations',
      'Set Up & Clean Up',
    ],
  },
  {
    id: 'service-3',
    title: 'Large Pack',
    subtitle: 'Idea for large parties',
    price: '$850',
    details: [
      'Services 80-100 Guests',
      'Nine Gallons Total',
      'Choose Up To 3 Flavors',
      '12oz Refillable Cups',
      'Aesthetic Decorations',
      'Set Up & Clean Up',
    ],
  },
];

export const dropOff = [
  {
    id: 'drop-off',
    title: 'Delivery Drop-Off',
    subtitle: 'With our Delivery Drop-Off catering option, we provide:',
    options: [
      '$6.50 per 20oz drink with toppings',
      '$6.00 per 20oz drink without toppings',
      '30 drinks minimum order',
      '$Free Delivery for 50+ drinks order',
      '$50 Delivery Fee within 25 miles',
      'Additional $5 per 10 miles',
    ],
    noHiddenFees: 'No Hidden Fees or Extra Costs',
    img: bobaPackaged,
  },
];

export const onSiteService = [
  {
    id: 'onsite',
    title: 'Premium Onsite Barista Service',
    subtitle: `Onsite Baristas making drinks to order, offering a fully
    customizable experience. With this, everyone is bound to find a
    drink they will love! Includes additional features like a wider
    selection of flavors and customization options.`,
    options: [
      'Onsite Barista crafting drinks to order',
      'Unlimited possible combinations for flavors and toppings',
      'Minimum 4 hours service',
      '$300 per hour',
    ],
    noHiddenFees: 'No Hidden Fees or Extra Costs',
    img: standSetup,
  },
];

export const menu = [
  {
    title: 'Milk Teas',
    teas: [
      {
        name: 'Jasmine Milk Tea',
        description:
          'A delicate blend of fragrant jasmine tea and creamy milk for a soothing, aromatic experience that transcends the ordinary.',
      },
      {
        name: 'Black Milk Tea',
        description:
          'Bold, robust black tea meets creamy milk for a rich, full-bodied beverage, a perfect harmony of flavor and comfort.',
      },
      {
        name: 'Honey Milk Tea',
        description:
          'This tasty drink brings together the creaminess of milk with the gentle sweetness of honey, creating a soothing and delicious treat.',
      },
      {
        name: 'Thai Milk Tea',
        description:
          'Spiced black tea meets sweet condensed milk for a vibrant, refreshing sip of Thai culture.',
      },
    ],
  },
  {
    title: 'Fruit Teas',
    teas: [
      {
        name: 'Lychee Green / Black Tea',
        description:
          "Sip on the refreshing allure of green tea infused with the exotic sweetness of lychee—a harmonious blend that's both vibrant and delicious.",
      },
      {
        name: 'Mango Green / Black Tea',
        description:
          'A tropical escape featuring the bold essence of green tea intertwined with the juicy sweetness of ripe mango.',
      },
      {
        name: 'Passion Fruit Green / Black Tea',
        description:
          'Exotic passion fruit essence delicately blended with premium tea leaves, creating a vibrant and refreshing tropical escape.',
      },
      {
        name: 'Peach Green / Black Tea',
        description:
          'Juicy peach essence meets perfectly brewed tea for a blissful, refreshing sip.',
      },
    ],
  },
  {
    title: 'Toppings',
    toppings: [
      'Honey Boba',
      'White Pearls',
      'Mango Jelly',
      'Strawberry Jelly',
      'Lychee Jelly',
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-1',
    // icon: <LuInstagram />,
    link: 'https://www.instagram.com/tarosbobabar/',
  },
];
