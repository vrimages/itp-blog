import React from 'react'
import Figure from './Figure'

import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import PortableText from '@sanity/block-content-to-react'






const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    }

  }

}

export default serializers

/*
export default function Body({ blocks }) {
  return (
    //<PortableText blocks={blocks} serializers={serializers} />
    <serializers blocks={blocks} serializers />
  )
}*/