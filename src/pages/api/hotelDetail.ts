import { NextApiRequest, NextApiResponse } from "next"


const myData = {
  hotel: {
    name: "Ettershaus, Bad Harzburg",
    ratings: 4.3,
    reviews: 762,
  },
  rooms: {
    title: "Rooms",
    desc: "Stylish elegance or modern ambience? You have the choice.",
    items: [
      {
        title: 'Superior Suite “Uncle Tom”',
        size: "25",
        image: "",
        desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
        beds: "2",
        view: "Mountain view",
        capacity: "capacity",
        price: "389",
        details: "Room Details",
      },
      {
        title: 'Superior Suite “Elfenstein”',
        size: "35",
        image: "",
        desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
        beds: "1",
        view: "Beach view",
        capacity: "capacity",
        price: "499",
        details: "Room Details",
      },
      {
        title: 'Superior Suite “Dision for life”',
        size: "65",
        image: "",
        desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
        beds: "5",
        view: "City view",
        capacity: "capacity",
        price: "899",
        details: "Room Details",
      },
      {
        title: 'Superior Suite “Ốp điện thoại giá rẻ”',
        size: "98",
        image: "",
        desc: "Generosity and comfort offer two separate bedrooms with double beds and a cozy living area with a sofa bed",
        beds: "3",
        view: "Jubgle view",
        capacity: "capacity",
        price: "699",
        details: "Room Details",
      }
    ]
  },
  dining: {
    title: "Dining",
    desc: "Our resort offers hobby gourmets and full-time connoisseurs a variety of locations to go on a culinary journey of discovery. The golden years can still be felt in the Tauts restaurant, where our chefs create tasty compositions from selected products. In the rustic Bar Hoffmann, our service staff prepare delicious cocktails and long drinks, which you are welcome to enjoy in the cozy armchairs.",
    items: [
      {
        title: "Restaurant Tauts",
        desc: 'Our "Tauts" restaurant skilfully reflects the mix of historical and modern elements. A culinary journey of discovery in a fine ambience. Here you can dine on seasonal and regional dishes or let yourself be surprised by exotic...',
        image: "",
        open: "Wednesday - Saturday </br> 6:00am - 9:00pm",
        breakfast: "",
        learnMore: "Go to "
      },
      {
        title: "Bar Hoffman",
        desc: 'In der Bar Hoffmann bereitet Ihnen unser Team leckere Cocktails und Longdrinks, die Sie in passender Atmosphäre genießen können.',
        image: "",
        open: "Wednesday - Saturday </br> 6:00am - 9:00pm",
        breakfast: "",
        learnMore: "Go to "
      }
    ]
  },
  services: {
    title: "Services",
    desc: "Our resort offers hobby gourmets and full-time connoisseurs a variety of locations to go on a culinary journey of discovery. The golden years can still be felt in the Tauts restaurant, where our chefs create tasty compositions from selected products. In the rustic Bar Hoffmann, our service staff prepare delicious cocktails and long drinks, which you are welcome to enjoy in the cozy armchairs.",
    items: [
      {
        title: "Wellness Area",
        desc: "Swim a few lengths in the integrated indoor and outdoor pool , enjoy the pleasant warmth of the 65°C organic sauna or really work up a sweat at 90°C. In the aroma steam bath you inhale apleasant 39 °C warm steam. Our vitality counter provides you with fresh apples, nuts, water and an exclusive tea station between sauna sessions.",
        subItems: [
          {
            title: "Whirl lick with a bubbling bench"
          },
          {
            title: "Whirl lick with a bubbling bench"
          },
          {
            title: "Whirl lick with a bubbling bench"
          },
          {
            title: "Whirl lick with a bubbling bench"
          },
          {
            title: "Whirl lick with a bubbling bench"
          }
        ]
      },
      {
        title: "Indoor & Outdoor Pools",
        desc: "Swim a few lengths in the integrated indoor and outdoor pool , enjoy the pleasant warmth of the 65°C organic sauna or really work up a sweat at 90°C. In the aroma steam bath you inhale apleasant 39 °C warm steam. Our vitality counter provides you with fresh apples, nuts, water and an exclusive tea station between sauna sessions.",
        subItems: [
          {
            title: "Whirl lick with a bubbling bench"
          },
          {
            title: "Four side bubblers "
          },
          {
            title: "modern conference room technology"
          },
        ]
      },
      {
        title: "Events & Meetings",
        desc: "Swim a few lengths in the integrated indoor and outdoor pool , enjoy the pleasant warmth of the 65°C organic sauna or really work up a sweat at 90°C. In the aroma steam bath you inhale apleasant 39 °C warm steam. Our vitality counter provides you with fresh apples, nuts, water and an exclusive tea station between sauna sessions.",
        subItems: [
          {
            title: "Whirl lick with a bubbling bench"
          },
          {
            title: "free WIFI"
          },
          {
            title: "5 function rooms for up to 150 people"
          },
        ]
      }
    ]
  },
  highlights: {
    title: "",
    desc: "",
    packageBtn: "Holiday Packages",
    primary: [
      {
        title: "Summer Vacation in the Harz Nature Park",
        learnMore: "Learn more",
        img: ""
      },
      {
        title: "Summer Vacation in the Harz Nature Park",
        learnMore: "Learn more",
        img: ""
      }
    ],
    secondary: [
      {
        title: "Alpaca Wellness at the Mainschleife",
        sub: "per person",
        price: 325.10,
        img: "",
        icon: "",
        seeMoreBtn: "",
        details: [
          {
            icon: "",
            text: "2N in Double Room “Weingarten"
          },
          {
            icon: "",
            text: "Breakfast buffet + dinner menu"
          },
          {
            icon: "",
            text: "2.5h alpaca hike + photoshoot"
          },
        ]
      }
    ]
  },
  history: {
    title: "The History of Sonnenhotel Ettershaus",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Auctor elit sed vulputate mi sit. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Sagittis purus sit amet volutpat consequat mauris.",
    items: [
      {
        title: "Built by Sir John Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
        img: ""
      },
      {
        title: "Built by Sir John Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
        img: ""
      },
      {
        title: "Built by Sir John Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
        img: ""
      },
      {
        title: "Built by Sir John Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
        img: ""
      },
      {
        title: "Built by Sir John Smith",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
        img: ""
      }
    ]
  },
  gallery: {
    title: "Media Gallery",
    desc: "A holiday picture says more than a thousand words. Take a look at the new Sonnenresort Ettershaus in our picture gallery. And if you have any questions, then feel free to get a more detailed picture by contacting us.",
    items: [
      {
        img: ""
      },
      {
        img: ""
      },
      {
        img: ""
      },
      {
        img: ""
      },
      {
        img: ""
      },
      {
        img: ""
      },
      {
        img: ""
      },
      {
        img: ""
      },
      {
        img: ""
      },
    ]
  },
  hosts: {
    title: "Meet Your hosts",
    leanMoreBtn: "Meet the rest of the team",
    items: [
      {
        img: "",
        name: "Frank Wyszkowski",
        title: "Etternshauz Host",
        link: "frank@sonnenhotels.de"
      }
    ]
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json((myData))
}

