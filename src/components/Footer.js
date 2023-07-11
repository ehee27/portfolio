import React from 'react'

const Footer = () => {
  const today = new Date()
  return (
    <div className="footer">
      TwoSeven
      <p>Copyright &copy; {today.getFullYear()}</p>
    </div>
  )
}

export default Footer
