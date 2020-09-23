import React from 'react'
import getYouTubeID from 'get-youtube-id'


// const YouTubePreview = props => console.log(props) || (<div />)

//const YouTubePreview = props => <pre>{JSON.stringify(props, null, 2)}</pre>

const YouTubePreview = ({ value }) => {
    const id = getYouTubeID(value.url)
    const url = `https://www.youtube.com/embed/${id}`

    if (!id) {
        return <div>Missing YouTube URL</div>
    }
    return (

        //<pre>{JSON.stringify(value, null, 2)}</pre>

        < iframe title="YouTube Preview" width="560" height="315" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe >
    )
}

export default {
    name: 'youtube',
    type: 'object',
    title: 'YouTube Embed',

    fields: [

        {
            name: 'url',
            type: 'url',
            title: 'URL',
        },
    ],
    preview: {
        select: {
            url: 'url',
        },
        component: YouTubePreview,
    }

}