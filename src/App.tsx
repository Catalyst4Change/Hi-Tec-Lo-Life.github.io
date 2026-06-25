import { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'
import folderWireframe from './assets/folder-wireframe.svg'
import textFile from './assets/text-file.svg'
import topBarGrid from './assets/top-bar-grid.svg'
import topBarMenu from './assets/hexagram.svg'
import topBarSignal from './assets/top-bar-signal.svg'
import topBarStack from './assets/top-bar-stack.svg'
import { eventItems } from './projects/eventPrototype'
import { projectItems } from './projects/projectPrototype'

type DesktopItem = {
  id: string
  name: string
  type: 'document' | 'folder'
  icon: string
  content?: string
  images?: string[]
  children?: DesktopItem[]
}

const desktopItems: DesktopItem[] = [
  {
    id: 'welcome',
    name: 'ReadMe',
    type: 'document',
    icon: textFile,
    content:
      '=== Welcome to Hi-Tec_Lo-Life ===\n\n*The future ain\'t what it used to be*\n\n>Hi-Tec_Lo-Life is a cyberpunk-bachelor-pad-themed Burning Man camp.\n\n>Outside of the playa, we build chunky, futuristic bullshit with a fun and functional vibe.\n\n>Our Mission: foster community through comfortable creative spaces, gatherings, and mutual aid.\n\nWe have removed our physical address form our website in order to ensure the safety of our community and prevent un-invited guests from attending our events.\n\nIf you are interested in attending one of our events for the first time, please [reach out to us](tel:+18083833571) to inquire about attendance and receive further instructions.',
  },
  {
    id: 'projects',
    name: 'Projects',
    type: 'folder',
    icon: folderWireframe,
    children: projectItems,
  },
  {
    id: 'events',
    name: 'Events',
    type: 'folder',
    icon: folderWireframe,
    children: eventItems,
  },
]

function App() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [activeDocId, setActiveDocId] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const formattedTime = useMemo(
    () =>
      currentTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    [currentTime],
  )

  const expandedItem = useMemo(
    () => desktopItems.find((item) => item.id === expandedId) ?? null,
    [expandedId],
  )

  const currentDoc = useMemo(() => {
    if (!expandedItem || expandedItem.type !== 'folder') {
      return null
    }

    return expandedItem.children?.find((child) => child.id === activeDocId) ?? null
  }, [activeDocId, expandedItem])

  const handleOpen = (item: DesktopItem) => {
    setExpandedId(item.id)
    setActiveDocId(null)
  }

  const handleOpenChild = (child: DesktopItem) => {
    setActiveDocId(child.id)
  }

  const closeView = () => {
    if (expandedItem?.type === 'folder' && activeDocId) {
      setActiveDocId(null)
      return
    }

    setExpandedId(null)
    setActiveDocId(null)
  }

  const showFolderContents = expandedItem?.type === 'folder' && !activeDocId

  const getTileIconSrc = (itemType: DesktopItem['type']) =>
    itemType === 'folder' ? folderWireframe : textFile

  return (
    <main className="desktop-shell">
      <header className="top-bar">
        <div className="top-bar__left" aria-hidden="true">
          <img src={topBarMenu} alt="" className="top-bar__glyph" />
          <img src={topBarGrid} alt="" className="top-bar__glyph top-bar__glyph" />
        </div>
        <div className="top-bar__time">{formattedTime}</div>
        <div className="top-bar__right" aria-hidden="true">
          <img src={topBarStack} alt="" className="top-bar__glyph top-bar__glyph" />
          <img src={topBarSignal} alt="" className="top-bar__glyph" />
        </div>
      </header>

      {!expandedItem ? (
        <section className="desktop-grid">
          {desktopItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="desktop-tile"
              onClick={() => handleOpen(item)}
            >
              <span className="desktop-tile__icon">
                <img
                  src={getTileIconSrc(item.type)}
                  alt=""
                  className="desktop-tile__icon-image"
                />
              </span>
              <span className="desktop-tile__label">{item.name}</span>
            </button>
          ))}
        </section>
      ) : (
        <section className="expanded-view">
          <header className="expanded-view__header">
            <div className="expanded-view__title-wrap">
              <p>
                {currentDoc?.name ?? expandedItem.name}
              </p>
            </div>
            <button
              type="button"
              className="close-button"
              onClick={closeView}
              aria-label="Close"
            >
              ×
            </button>
          </header>

          {expandedItem.type === 'document' ? (
            <article className="document-panel">
              {expandedItem.images?.map((image, index) => (
                <img
                  key={`${expandedItem.id}-image-${index}`}
                  className="document-panel__image"
                  src={image}
                  alt={`${expandedItem.name} image ${index + 1}`}
                />
              ))}
              <div className="document-markdown">
                <ReactMarkdown>{expandedItem.content ?? ''}</ReactMarkdown>
              </div>
            </article>
          ) : showFolderContents ? (
            <section className="folder-panel">
              {expandedItem.children?.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  className="desktop-tile desktop-tile"
                  onClick={() => handleOpenChild(child)}
                >
                  <span className="desktop-tile__icon">
                    <img
                      src={getTileIconSrc(child.type)}
                      alt=""
                      className="desktop-tile__icon-image"
                    />
                  </span>
                  <span className="desktop-tile__label">{child.name}</span>
                </button>
              ))}
            </section>
          ) : (
            <article className="document-panel">
              {currentDoc?.images?.map((image, index) => (
                <img
                  key={`${currentDoc.id}-image-${index}`}
                  className="document-panel__image"
                  src={image}
                  alt={`${currentDoc.name} image ${index + 1}`}
                />
              ))}
              <div className="document-markdown">
                <ReactMarkdown>{currentDoc?.content ?? ''}</ReactMarkdown>
              </div>
            </article>
          )}
        </section>
      )}
    </main>
  )
}

export default App
