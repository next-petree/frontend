import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './style';

const Header = () => {
  return (
    <StyledNav>
      <h1>
        <Link to={'/'}>logo</Link>
      </h1>
      <ul>
        <li>
          <Link to={'/counter'}>counter</Link>
        </li>
        <li>
          <Link to={'/chart'}>chart</Link>
        </li>
        <li>
          <Link to={'/postBoard'}>postBoard</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Header;
