import textFile from '../assets/text-file.svg'

export type EventItem = {
  id: string
  name: string
  type: 'document' | 'folder'
  icon: string
  content?: string
  image?: string
}

const eventImagePlaceholder = ''

export const eventItems: EventItem[] = [
  {
    id: 'event-01',
    name: 'About Events',
    type: 'document',
    icon: textFile,
    image: eventImagePlaceholder,
    content:
      'We host monthly events, as well as some for special occasions.\n\n>[Sign up for text/email updates](https://lp.constantcontactpages.com/sl/V7GXOPn)',
  },
  {
    id: 'event-02',
    name: "Craft Party",
    type: 'document',
    icon: textFile,
    image: eventImagePlaceholder,
    content:
      'July Craft Party \n\nVibes:\n\n>Ever want to finish that project AND hang out with other crafty nerds?\nWell, have we got the party for you!\n\n>Bring your latest project, or start something new with our supplies.\n\nBring:\n - friends & partners\n - snacks & bottles\n - projects & supplies\n\nLogistics: \n - Saturday May 9th \n - 5pm crafts, 10pm party \n - NOPE HOUSE - Westminster \n   - ([contact](mailto:catalyst@hi-tec-lo-life.com) for address)',
  },
//   {
//     id: 'event-03',
//     name: "Dorty Forty",
//     type: 'document',
//     icon: textFile,
//     image: eventImagePlaceholder,
//     content:
//       'Catalyst',
//   },
]
