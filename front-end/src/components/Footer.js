import React from 'react';

function Footer() {
  const footerStyle = {
      position : 'absolute',
      bottom : '0',
      width : '100vw',
      textAlign : 'center'
  }
      return (
        <div style={footerStyle} className="Footer">
          <h5> &copy; Alexander Beach </h5>
        </div>
      );
}

export default Footer;
