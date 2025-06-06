"use client"

import React from "react"
import CoursePage from "./components/CoursePage"

// Add some basic global styles
const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: "#0f0f0f",
    color: "#fff",
  },
  "*": {
    boxSizing: "border-box",
  },
}

// Apply global styles
const applyGlobalStyles = () => {
  Object.entries(globalStyles).forEach(([selector, styles]) => {
    const elements = selector === "body" ? [document.body] : document.querySelectorAll(selector)

    elements.forEach((element) => {
      if (element) {
        Object.entries(styles).forEach(([prop, value]) => {
          element.style[prop] = value
        })
      }
    })
  })
}

const App = () => {
  // Apply global styles when component mounts
  React.useEffect(() => {
    applyGlobalStyles()
  }, [])

  // You can toggle between the two pages by changing the component below
  // For now, I'll show the LessonPage by default
  return (
    <div>
      {/* <LessonPage /> */}
      <CoursePage />
    </div>
  )
}

export default App
