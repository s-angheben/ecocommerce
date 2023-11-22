import React, { createContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff4500; /* Change to your desired hover color */
  }
`;

interface CoolLinkProps {
  href: string;
  text: string;
}

const CoolLink: React.FC<CoolLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{text}</StyledLink>
    </Link>
  );
};

export default CoolLink;
