import {
  bobaIsLife,
  groupCheers,
  group,
  bobaPackaged,
  barista,
  stand1,
  stand2,
  stand3,
  stand4,
  stand5,
  stand6,
  stand7,
  meta,
  cisco,
  branch,
  confluent,
  happily,
  google,
  micron,
  kpmg,
  sjsu,
  zip,
  woman1,
  woman2,
  woman3,
  taro,
  jasmine,
  black,
  honey,
  thai,
  lychee,
  mango,
  passionfruit,
  peach,
  orange,
  strawberryCream,
  lycheeCucumberCooler,
  cookiesTaro,
  mintyOrangeDream,
  pandanWaffle,
} from '../assets';

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
  subheading2: 'Your one stop shop for boba catering in the Bay Area!',
  reactTyped: {
    strings: [
      'Birthdays!',
      'Weddings!',
      'Company Parties!',
      'Baby Showers!',
      'Graduations!',
      'Anniversaries!',
    ],
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
  { title: 'Zip', logo: zip },
  { title: 'Google', logo: google },
  { title: 'Meta', logo: meta },
  { title: 'CISCO', logo: cisco },
  { title: 'happily', logo: happily },
  { title: 'Micron Technology', logo: micron },
  { title: 'KPMG', logo: kpmg },
  { title: 'San Jose State University', logo: sjsu },
  { title: 'branch', logo: branch },
  { title: 'confluent', logo: confluent },
];

export const carouselPhotos = [
  { id: '0', src: stand1 },
  { id: '1', src: stand2 },
  { id: '2', src: stand3 },
  { id: '3', src: stand4 },
  { id: '4', src: stand5 },
  { id: '5', src: stand6 },
  { id: '7', src: stand7 },
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
    img: stand1,
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

export const testimonials = [
  {
    name: 'Jaymi J.',
    avatar: woman1,
    location: 'Cupertino, CA',
    review: `"The boba was DELICIOUS! All our guests kept coming up to us saying how yummy the boba was & I 100% agree, it was sooooo good! We got the Thai milk tea, Jasmine milk tea & passionfruit green tea with honey boba, lychee jelly & mango jelly. It was so fun to be able to make our drinks ourselves. You better believe I'll be booking with Taro's Boba Bar again for our future events!"`,
  },
  {
    name: 'Shannon N.',
    avatar: woman2,
    location: 'Santa Clara, CA',
    review: `"I had them cater my daughter's 1st birthday party and everyone absolutely LOVED it. None of my guests could've resisted the boba selection and quality! We spoke to them about having elderly guests and Erin suggested appropriate drinks that they would enjoy (less sweetened Jasmine Green Tea). Philip was very professional and made the process super easy."`,
  },
  {
    name: 'Ruby P.',
    avatar: woman3,
    location: 'San Jose, CA',
    review: `"Amazing! So happy with their selection of boba and the presentation. I hosted a small gathering and decided it would be fun to cater boba, and I have zero regrets. All my guests raved about it and were so happy. The flavors were amazing, the set up was adorable and perfect. 10/10 recommend!"`,
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
    img: stand1,
  },
];

export const wholeMenu = [
  {
    title: 'Specialties',
    subtitle: '*Only available with Premium On-Site Barista Service',
    items: [
      {
        name: 'Strawberry & Cream',
        image: strawberryCream,
        description:
          'Floral jasmine milk tea served with our homemade strawberry crema topped with fresh strawberries.',
      },
      {
        name: 'Lychee Cucumber Cooler',
        image: lycheeCucumberCooler,
        description:
          'A refreshing twist on our lychee green ea, infused with hydrating cucumbers and a hint of mint.',
      },
      {
        name: 'Cookies & Taro',
        image: cookiesTaro,
        description:
          "Taro's take on cookies and cream is our house black milk tea served with a rich taro crema topped with oreo crumbs.",
      },
      {
        name: 'Minty orange dream',
        image: mintyOrangeDream,
        description:
          'Our light green tea infused with orange and fresh picked mint leaves topped with orange slices.',
      },
      {
        name: 'pandan waffle',
        image: pandanWaffle,
        description: `Our take on Vietnamese pandan waffles (otherwise known as Banh Kep La Dua) features a sweet pandan aroma, subtile vanilla-coconut flavor while offering a fluffy inside and crispy outside.`,
      },
    ],
  },
  {
    title: 'Milk Teas',
    items: [
      {
        name: 'Taro Milk Tea',
        image: taro,
        description:
          'A creamy, sweet purple tea with a hint of vanilla, made from taro root, milk, and tea, perfect for a unique flavor experience.',
      },
      {
        name: 'Jasmine Milk Tea',
        image: jasmine,
        description:
          'A delicate blend of fragrant jasmine tea and creamy milk for a soothing, aromatic experience that transcends the ordinary.',
      },
      {
        name: 'Black Milk Tea',
        image: black,
        description:
          'Bold, robust black tea meets creamy milk for a rich, full-bodied beverage, a perfect harmony of flavor and comfort.',
      },
      {
        name: 'Honey Milk Tea',
        image: honey,
        description:
          'This tasty drink brings together the creaminess of milk with the gentle sweetness of honey, creating a soothing and delicious treat.',
      },
      {
        name: 'Thai Milk Tea',
        image: thai,
        description:
          'Spiced black tea meets sweet condensed milk for a vibrant, refreshing sip of Thai culture.',
      },
    ],
  },

  {
    title: 'Fruit Teas',
    items: [
      {
        name: 'Lychee Green / Black Tea',
        image: lychee,
        description:
          "Sip on the refreshing allure of green tea infused with the exotic sweetness of lychee—a harmonious blend that's both vibrant and delicious.",
      },
      {
        name: 'Mango Green / Black Tea',
        image: mango,
        description:
          'A tropical escape featuring the bold essence of green tea intertwined with the juicy sweetness of ripe mango.',
      },
      {
        name: 'Passion Fruit Green / Black Tea',
        image: passionfruit,
        description:
          'Exotic passion fruit essence delicately blended with premium tea leaves, creating a vibrant and refreshing tropical escape.',
      },
      {
        name: 'Peach Green / Black Tea',
        image: peach,
        description:
          'Juicy peach essence meets perfectly brewed tea for a blissful, refreshing sip.',
      },
      {
        name: 'Orange Green Tea',
        image: orange,
        description:
          'Freshly hand-squeezed orange juice combined with floral, sweet, and fragrant green tea.',
      },
    ],
  },
  // {
  //   title: 'Non-Caffeinated Drinks',
  //   items: [
  //     {
  //       name: 'Freshly Squeezed Orange Juice',
  //       description: '',
  //     },
  //     {
  //       name: 'Watermelon Juice',
  //       description: '',
  //     },
  //     {
  //       name: 'Pineapple Quencher',
  //       description: '',
  //     },
  //   ],
  // },
  {
    title: 'Toppings',
    items: [
      { name: 'Honey Boba', description: '' },
      { name: 'White Pearls', description: '' },
      { name: 'Grass Jelly', description: '' },
      { name: 'Mango Jelly', description: '' },
      { name: 'Strawberry Jelly', description: '' },
      { name: 'Lychee Jelly', description: '' },
      { name: 'Egg Pudding', description: '' },
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
