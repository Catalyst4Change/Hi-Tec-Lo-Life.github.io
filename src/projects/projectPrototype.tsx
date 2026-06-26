import textFile from '../assets/wireframes/text-file.svg'

export type ProjectItem = {
  id: string
  name: string
  type: 'document' | 'folder'
  icon: string
  content?: string
  images?: string[]
}

const projectImagePlaceholder = ''

export const projectItems: ProjectItem[] = [
  {
    id: 'project-01',
    name: 'The Sigil',
    type: 'document',
    icon: textFile,
    images: ['https://hi-tec-lo-life.com/images/sigil.jpeg'],
    content:
      '>As our camp continued to gain a presence and an aesthetic, we wanted to create a symbol that represented our identity and values.\n\n>We settled on the Unicursal Hexagram - a six-pointed star drawn in one unbroken line.\n\n>It, like us, has a cultish vibe and is reminiscent of sacred geometry. Once used by infamous occultist Aleister Crowley, the symbol has a rich history dating back to the 16th century.The symbol was also used by Italian philosopher Giordano Bruno, who was burned at the stake by the Roman Catholic Church for his "heretical ideas", such as the Su\n\n>n being the center of our solar system and that other planets could potentially harbor life.\n\n>We felt that this rebellious and non-conformist spirit aligned with our own values and identity.\n\n>Anyway, we built a big one out of reclaimed aluminum and backlit it with addressable LEDs. The math required to calculate the angles and dimensions of the hexagram was a fun challenge, and we ended up with a striking and unique piece of art that represents Hi-Tec_Lo-Life and its values.',
  },
  {
    id: 'project-02',
    name: 'HexaBench',
    type: 'document',
    icon: textFile,
    images: ['https://hi-tec-lo-life.com/images/hexabench.jpeg', 'https://hi-tec-lo-life.com/images/hexabench_backyard.jpeg'],
    content:
      'Flat-pack Hex-a-Bench\n\n>When thinking of futuristic furniture for outdoor use, we wanted something that would be portable, easy to assemble, and most importantly - look sick as hell.\n\n>I ended up teaching myself how to use CAD software and designed a hexagonal bench where each seating section can be cut from a single plywood sheet.\n\n>We hand-cut a prototype bench and realized weight distribution and stability were issues. After some adjustments, we sent the plans to a CnC mill where it was cut out.\n\n>The final product is a bench that can be easily dis/assembled without any tools or hardware and packed flat for transport, making it perfect for outdoor events.\n\n>Oh, and of course we painted it black so it looks sick as hell.',
  },
  {
    id: 'project-07',
    name: 'Monitor Monster',
    type: 'document',
    icon: textFile,
    images: ['https://hi-tec-lo-life.com/images/mm1.jpeg', 'https://hi-tec-lo-life.com/images/mm2.jpeg'],
    content:
      '>When I worked as a mailman for a computer repair shop, I rescued dozens of artfully-broken LCD monitors from the E-waste bin. After amassing my collection, I cobbled them together with a spinal column of VGA splitters and a brain of a discarded microPC to create a video wall that we affectionately dubbed the "Monitor Monster".\n\n>The Monitor Monster is a staple of our camp. It is a testament to resourcefulness, a monument to creativity, and a shrine to technology. It is a constantly-evolving piece of art that we occasionally update with new monitors and software.',
  },
  {
    id: 'project-03',
    name: 'Trip Tent',
    type: 'document',
    icon: textFile,
    images: [projectImagePlaceholder],
    content:
      '404 - Project not found',
  },
  {
    id: 'project-04',
    name: 'Disco Bros',
    type: 'document',
    icon: textFile,
    images: [projectImagePlaceholder],
    content:
      '404 - Project not found',
  },
  {
    id: 'project-05',
    name: 'S. Unit',
    type: 'document',
    icon: textFile,
    images: [projectImagePlaceholder],
    content:
      '404 - Project not found',
  },
  {
    id: 'project-06',
    name: 'CoValence',
    type: 'document',
    icon: textFile,
    images: [projectImagePlaceholder],
    content:
      '404 - Project not found',
  },
]