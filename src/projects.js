import twoSevenTech from './assets/twoSevenTech.jpeg'
import twoSevenArt from './assets/twoSevenArt.jpeg'
import nfl from './assets/nfl.jpeg'
import htmlAl from './assets/htmAlverez.jpeg'
import gpt3 from './assets/gpt3.jpeg'
import nostalgia from './assets/nostalgia.jpeg'

export const projectData = [
  {
    id: 1,
    name: 'MERN Help Desk',
    description:
      'MERN stack app to manage help desk tickets. Tickets assigned by unique ID, completion status, and protected by routes based on employee role.',
    link: 'https://scottnotes.onrender.com/',
    projectThumb: twoSevenTech,
  },
  {
    id: 2,
    name: 'NFL Statistics',
    description:
      'PERN stack app analyzing statistics with data Visualizations. We can examine league-wide offensive output over last 20 years, or individual team offense.',
    link: 'https://nfl-stats-app.onrender.com/',
    projectThumb: nfl,
  },
  {
    id: 3,
    name: 'Artwork eCommerce',
    description:
      'Simple eComm website selling artwork. Standard React architecture integrating shopping cart modal and Stripe checkout API.',
    link: 'https://twosevenart.com/',
    projectThumb: twoSevenArt,
  },
  {
    id: 4,
    name: 'Vintage Video Games',
    description:
      'PERN stack app showcasing vintage video game classics. JWT authentication required to select products and checkout via Stripe API.',
    link: 'https://www.slhtmlalverez.com/',
    projectThumb: htmlAl,
  },
  {
    id: 5,
    name: 'Nostalgia Social App',
    description:
      'PERN stack app. A unique social media concept. Create communities based on lived experiences. Build communities with friends, artifacts and stories. ',
    link: 'https://www.slnostalgia.com/',
    projectThumb: nostalgia,
  },
  {
    id: 6,
    name: 'Figma GPT Design',
    description:
      "Utilizing React to convert a client's Figma concept into a modern UI. This project was simply a frontend design challenge. There is no backend functionality.",
    link: 'https://www.scottlchat.com/',
    projectThumb: gpt3,
  },
]
