"use client"

import { useState } from "react"
import {
  Plus,
  Settings,
  Circle,
  Box,
  Lightbulb,
  Zap,
  Cpu,
  MessageSquare,
  FileText,
  Clock,
  Gauge,
  MessageCircle,
  Headphones,
  Wrench,
} from "lucide-react"

const CoursePage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const containerStyle = {
    backgroundColor: "#0f0f0f",
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
  }

  const headerStyle = {
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "30px",
    position: "relative",
  }

  const headerImageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    backgroundImage: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
  }

  const headerContentStyle = {
    padding: "20px",
    textAlign: "center",
  }

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  }

  const subtitleStyle = {
    fontSize: "16px",
    color: "#aaa",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto",
  }

  const sectionStyle = {
    marginBottom: "40px",
  }

  const sectionHeaderStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  }

  const sectionDescriptionStyle = {
    fontSize: "14px",
    color: "#888",
    marginBottom: "20px",
  }

  const lessonCardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    marginBottom: "10px",
  }

  const lessonIconStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "15px",
  }

  const lessonInfoStyle = {
    flex: 1,
  }

  const lessonTitleStyle = {
    fontSize: "16px",
    fontWeight: "medium",
  }

  const lessonDurationStyle = {
    fontSize: "12px",
    color: "#888",
    marginTop: "4px",
  }

  const startButtonStyle = {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
  }

  const faqSectionStyle = {
    marginTop: "60px",
  }

  const faqItemStyle = {
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "16px 0",
  }

  const faqHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "medium",
  }

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    marginTop: "60px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#888",
    fontSize: "14px",
  }

  const footerLinkStyle = {
    color: "#888",
    textDecoration: "none",
    marginLeft: "20px",
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const lessonIcons = [
    <Settings size={18} key="settings" />,
    <Circle size={18} key="circle" />,
    <Box size={18} key="box" />,
    <Zap size={18} key="zap" />,
    <Cpu size={18} key="cpu" />,
    <MessageSquare size={18} key="messageSquare" />,
    <FileText size={18} key="fileText" />,
    <Clock size={18} key="clock" />,
    <Gauge size={18} key="gauge" />,
    <MessageCircle size={18} key="messageCircle" />,
    <Headphones size={18} key="headphones" />,
    <Wrench size={18} key="wrench" />,
    <Lightbulb size={18} key="lightbulb" />,
    <Settings size={18} key="settings2" />,
    <Circle size={18} key="circle2" />,
  ]

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={headerImageStyle}></div>
        <div style={headerContentStyle}>
          <h1 style={titleStyle}>CourseOS</h1>
          <p style={subtitleStyle}>
            The Course Operating System is a Template that lets you host your online course directly in Framer and
            protect it with Outseta.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Modular</h2>
        <p style={sectionDescriptionStyle}>15 LESSONS</p>

        <div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Introduction</h3>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "15px" }}>Why I created this course.</p>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[0]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 1</div>
                  <div style={lessonDurationStyle}>8:30</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[1]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 2</div>
                  <div style={lessonDurationStyle}>4:30</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[2]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 3</div>
                  <div style={lessonDurationStyle}>5:30</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Foundation</h3>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "15px" }}>
              Learn the basics first or fail on the long run.
            </p>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[3]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 4</div>
                  <div style={lessonDurationStyle}>7:23</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[4]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 5</div>
                  <div style={lessonDurationStyle}>6:30</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[5]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 6</div>
                  <div style={lessonDurationStyle}>8:12</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[6]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 7</div>
                  <div style={lessonDurationStyle}>3:10</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Creation</h3>
            <p style={{ fontSize: "14px", color: "#888", marginBottom: "15px" }}>Let's build some nice stuff.</p>

            {/* More lesson cards would go here */}
            {/* I'm showing just a couple to keep the code concise */}
            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[7]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 8</div>
                  <div style={lessonDurationStyle}>7:23</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>

            <div style={lessonCardStyle}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={lessonIconStyle}>{lessonIcons[8]}</div>
                <div style={lessonInfoStyle}>
                  <div style={lessonTitleStyle}>Lesson 9</div>
                  <div style={lessonDurationStyle}>6:30</div>
                </div>
              </div>
              <button style={startButtonStyle}>Start</button>
            </div>
          </div>
        </div>
      </div>

      <div style={faqSectionStyle}>
        <h2 style={sectionHeaderStyle}>Member FAQs</h2>

        <div style={faqItemStyle}>
          <div style={faqHeaderStyle} onClick={() => toggleFaq(0)}>
            <span>What's this template for?</span>
            <Plus size={16} />
          </div>
        </div>

        <div style={faqItemStyle}>
          <div style={faqHeaderStyle} onClick={() => toggleFaq(1)}>
            <span>What's Outseta?</span>
            <Plus size={16} />
          </div>
        </div>
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
  )
}

export default CoursePage
