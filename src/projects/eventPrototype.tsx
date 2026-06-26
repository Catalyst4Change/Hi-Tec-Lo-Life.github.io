import textFile from '/src/assets/wireframes/folder-wireframe.svg'
import aboutEventsContent from '../assets/events/aboutEvents.md?raw'
import craftPartyContent from '../assets/events/craftParty.md?raw'

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
      aboutEventsContent,
  },
  {
    id: 'event-02',
    name: "Craft Party",
    type: 'document',
    icon: textFile,
    image: eventImagePlaceholder,
    content:
      craftPartyContent,
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
