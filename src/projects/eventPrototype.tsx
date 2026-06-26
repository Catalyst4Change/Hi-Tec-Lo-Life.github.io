import textFile from '/src/assets/wireframes/folder-wireframe.svg'

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
      '>We host monthly events, as well as some for special occasions.\n\n>[Sign up for text/email updates](https://lp.constantcontactpages.com/sl/V7GXOPn)\n\n>We have removed our physical address form our website in order to ensure the safety of our community and prevent un-invited guests from attending our events.\n\n>If you are interested in attending one of our events for the first time, please [reach out to us](tel:+18083833571) to inquire about attendance and receive further instructions.',
  },
  {
    id: 'event-02',
    name: "Craft Party",
    type: 'document',
    icon: textFile,
    image: eventImagePlaceholder,
    content:
      '**July Craft Party**\n\nOur monthly craft party has a *twist*:\n\n**PART I**:\n\n>Our normal craft party will be hosted by Renzo & Lyra at their new place! Help them celebrate their new house while working on your crafts!\n\nVibes:\n\n>Ever want to finish that project AND hang out with other crafty nerds?\nWell, have we got the party for you!\n\n>Bring your latest project, or start something new with our supplies.\n\nBring:\n - friends & partners\n - snacks & bottles\n - projects & supplies\n\nLogistics: \n - Saturday July 11th \n - 4pm - 9pm \n - Lyra & Renzo\'s\n   - ([RSVP](mailto:catalyst@hi-tec-lo-life.com) for address)\n\n**PART II**\n\n>The \'In-case-you-missed-Apo\'  afterparty will be held at NOPE House. Marvel at our cyberpunk billshit and  have the babiest of burns. Gin & Tonics on tap!\n\nLogistics: \n - Saturday July 11th \n - 9pm - late \n - NOPE HOUSE - Westminster \n   - ([contact](mailto:catalyst@hi-tec-lo-life.com) for address)',
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
