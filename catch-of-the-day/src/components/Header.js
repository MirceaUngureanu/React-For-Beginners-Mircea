import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='top'>
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          of the day</h1>
        <h3 className='tagline'>
          <span>Fresh seafood market</span>
        </h3>
      </header>
    );
  }
}

export default Header;