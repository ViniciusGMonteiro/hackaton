"use client"

import { useState } from "react"
import { ArrowLeft, Play, Link, FileText, Plus, X } from "lucide-react"
import Sidebar from "./Sidebar"

const LessonPage = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(1)

  const containerStyle = {
    display: "flex",
    backgroundColor: "#0f0f0f",
    color: "#fff",
    minHeight: "100vh",
  }

  const mainContentStyle = {
    flex: 1,
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  }

  const backLinkStyle = {
    display: "flex",
    alignItems: "center",
    color: "#888",
    marginBottom: "30px",
    textDecoration: "none",
    fontSize: "14px",
  }

  const titleStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "20px",
  }

  const descriptionStyle = {
    fontSize: "16px",
    color: "#aaa",
    lineHeight: "1.6",
    marginBottom: "30px",
  }

  const videoContainerStyle = {
    position: "relative",
    width: "100%",
    height: "250px",
    backgroundColor: "#111",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "40px",
    backgroundImage: "linear-gradient(135deg, #6b46c1 0%, #9f7aea 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  }

  const playButtonStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "20px",
  }

  const videoTitleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  }

  const videoSubtitleStyle = {
    fontSize: "14px",
    opacity: 0.8,
    maxWidth: "80%",
    textAlign: "center",
  }

  const subscribeButtonStyle = {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  }

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    marginTop: "40px",
  }

  const summaryStyle = {
    fontSize: "16px",
    color: "#aaa",
    lineHeight: "1.6",
    marginBottom: "30px",
  }

  const linkItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    marginBottom: "10px",
    cursor: "pointer",
  }

  const linkIconStyle = {
    marginRight: "10px",
    opacity: 0.7,
  }

  const accordionItemStyle = {
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "10px",
  }

  const accordionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    cursor: "pointer",
  }

  const accordionContentStyle = {
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    color: "#888",
    fontSize: "14px",
    lineHeight: "1.6",
  }

  const buttonStyle = {
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "30px",
    display: "block",
    width: "fit-content",
    margin: "40px auto",
  }

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#888",
    fontSize: "14px",
  }

  const footerLinkStyle = {
    color: "#888",
    textDecoration: "none",
    marginLeft: "20px",
  }

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index)
  }

  return (
    <div style={containerStyle}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={mainContentStyle}>
          <a href="#" style={backLinkStyle}>
            <ArrowLeft size={16} style={{ marginRight: "8px" }} />
            Modular
          </a>

          <h1 style={titleStyle}>Lesson 1</h1>
          <p style={descriptionStyle}>
            Welcome to this lesson on creating a website template. In this short lesson, we will explore the key steps
            involved in designing a website template.
          </p>

          <div style={videoContainerStyle}>
            <div style={playButtonStyle}>
              <Play size={24} fill="#fff" />
            </div>
            <div style={videoTitleStyle}>Input</div>
            <div style={videoSubtitleStyle}>
              A Component for Framer. Supports Loops, FormSpark, MailChimp, and GetWaitlist.
            </div>
            <button style={subscribeButtonStyle}>Subscribe</button>
          </div>

          <h2 style={sectionTitleStyle}>Summary</h2>
          <p style={summaryStyle}>
            In this short lesson, we will explore the key steps involved in designing a website template. From defining
            the purpose and audience to planning the layout, styling, and coding, you'll learn how to create a visually
            appealing and functional foundation for your website. Let's dive in and unlock the world of website template
            creation!
          </p>

          <h2 style={sectionTitleStyle}>Resources</h2>
          <div style={linkItemStyle}>
            <Link size={16} style={linkIconStyle} />
            Link Name
          </div>
          <div style={linkItemStyle}>
            <Link size={16} style={linkIconStyle} />
            Link Name
          </div>

          <h2 style={sectionTitleStyle}>Downloads</h2>
          <div style={linkItemStyle}>
            <FileText size={16} style={linkIconStyle} />
            File Name
          </div>
          <div style={linkItemStyle}>
            <FileText size={16} style={linkIconStyle} />
            File Name
          </div>

          <h2 style={sectionTitleStyle}>FAQ</h2>
          <div style={accordionItemStyle}>
            <div style={accordionHeaderStyle} onClick={() => toggleAccordion(0)}>
              <span>Accordion Title</span>
              <Plus size={16} />
            </div>
          </div>

          <div style={accordionItemStyle}>
            <div style={accordionHeaderStyle} onClick={() => toggleAccordion(1)}>
              <span>Accordion Title</span>
              {expandedAccordion === 1 ? <X size={16} /> : <Plus size={16} />}
            </div>
            {expandedAccordion === 1 && (
              <div style={accordionContentStyle}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna.
              </div>
            )}
          </div>

          <button style={buttonStyle}>Complete Lesson</button>
        </div>

        <div style={footerStyle}>
          <div>Proudly built in</div>
          <div>
            <span>CourseOS Template</span>
            <a href="#" style={footerLinkStyle}>
              Buy this template
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPage
