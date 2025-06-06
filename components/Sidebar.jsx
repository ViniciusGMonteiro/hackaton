import { Settings, Circle, Box, Lightbulb, Users, MessageCircle, Users2, User, LogOut, Search } from "lucide-react"

const Sidebar = () => {
  const sidebarStyle = {
    width: "180px",
    height: "100vh",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
  }

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    marginBottom: "20px",
  }

  const logoStyle = {
    backgroundColor: "#333",
    borderRadius: "8px",
    padding: "8px",
    marginRight: "10px",
  }

  const logoTextStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  }

  const sectionTitleStyle = {
    fontSize: "12px",
    color: "#666",
    padding: "0 20px",
    marginTop: "20px",
    marginBottom: "10px",
  }

  const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "14px",
  }

  const activeMenuItemStyle = {
    ...menuItemStyle,
    backgroundColor: "#333",
    borderLeft: "2px solid #fff",
  }

  const iconStyle = {
    marginRight: "10px",
    opacity: 0.7,
  }

  const searchContainerStyle = {
    padding: "0 20px",
    marginTop: "auto",
  }

  const searchStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: "4px",
    padding: "8px 12px",
    marginTop: "10px",
  }

  const searchIconStyle = {
    marginRight: "8px",
    opacity: 0.5,
  }

  const searchTextStyle = {
    color: "#666",
    fontSize: "14px",
  }

  return (
    <div style={sidebarStyle}>
      <div style={logoContainerStyle}>
        <div style={logoStyle}>
          <Settings size={18} />
        </div>
        <div style={logoTextStyle}>
          CourseOS
          <div style={{ fontSize: "12px", opacity: 0.5 }}>Framer Template</div>
        </div>
      </div>

      <div style={sectionTitleStyle}>MODULAR</div>
      <div style={activeMenuItemStyle}>
        <Circle size={16} style={iconStyle} />
        Introduction
      </div>
      <div style={menuItemStyle}>
        <Box size={16} style={iconStyle} />
        Foundation
      </div>
      <div style={menuItemStyle}>
        <Lightbulb size={16} style={iconStyle} />
        Creation
      </div>
      <div style={menuItemStyle}>
        <Lightbulb size={16} style={iconStyle} />
        Strategies
      </div>

      <div style={sectionTitleStyle}>LINKS</div>
      <div style={menuItemStyle}>
        <Users size={16} style={iconStyle} />
        Community
      </div>
      <div style={menuItemStyle}>
        <MessageCircle size={16} style={iconStyle} />
        Coaching
      </div>
      <div style={menuItemStyle}>
        <Users2 size={16} style={iconStyle} />
        Mentors
      </div>

      <div style={sectionTitleStyle}>ACCOUNT</div>
      <div style={menuItemStyle}>
        <User size={16} style={iconStyle} />
        Profile
      </div>
      <div style={menuItemStyle}>
        <LogOut size={16} style={iconStyle} />
        Logout
      </div>

      <div style={searchContainerStyle}>
        <div style={searchStyle}>
          <Search size={16} style={searchIconStyle} />
          <span style={searchTextStyle}>Search</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
