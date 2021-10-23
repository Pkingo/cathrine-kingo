import { useState, useEffect } from "react"

function addBridge(callback) {
  const existingScript = document.getElementById("storyblokBridge")
  if (!existingScript) {
    const script = document.createElement("script")
    script.src = "//app.storyblok.com/f/storyblok-v2-latest.js"
    script.id = "storyblokBridge"
    document.body.appendChild(script)
    script.onload = () => {
      callback()
    }
  } else {
    callback()
  }
}

export default function useStoryblok(originalStory, location) {
  let [story, setStory] = useState(originalStory)

  if (typeof story?.content === "string") {
    story.content = JSON.parse(story.content)
  }

  function initEventListener() {
    const StoryblokBridge = window["StoryblokBridge"]

    if (typeof StoryblokBridge !== "undefined") {
      const storyblokInstance = new StoryblokBridge()

      storyblokInstance.on(["published", "change"], () => {
        window.location.reload()
      })

      storyblokInstance.on(["input"], event => {
        setStory(event.story)
      })
    }
  }

  useEffect(() => {
    if (location.search.includes("_storyblok")) {
      addBridge(initEventListener)
    }
  })

  return story
}
