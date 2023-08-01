import React from 'react';

const Header = () => {
  return (
    <header>
      this is the header
    </header>
  );
};



// style={headerStyle} insert this as the attribute of the header tag
// Styles
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
};

export default Header;
