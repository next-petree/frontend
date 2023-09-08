import { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { css, styled } from 'styled-components';

import { ReactComponent as LogoPawPrimary } from 'assets/images/logo_paw_primary.svg';
import { ReactComponent as LogoTextPrimary } from 'assets/images/logo_text_primary.svg';
import { ReactComponent as LogoPawWhite } from 'assets/images/logo_paw_white.svg';
import { ReactComponent as LogoTextWhite } from 'assets/images/logo_text_white.svg';

const Container = styled(Link)<Pick<Props, 'size'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  ${({ size }) =>
    size === 'large'
      ? css`
          flex-direction: column;
          svg:first-child {
            width: 127px;
            height: 127px;
          }
          svg:last-child {
            width: 197.407px;
            height: 64.841px;
          }
        `
      : size === 'medium'
      ? css`
          svg:first-child {
            width: 4.6875rem;
            height: 4.6875rem;
          }
          svg:last-child {
            width: 9.49694rem;
            height: 3.11938rem;
          }
        `
      : size === 'small' &&
        css`
          svg:first-child {
            width: 2.25rem;
            height: 2.25rem;
          }
          svg:last-child {
            width: 3.49738rem;
            height: 1.14875rem;
          }
        `}
`;

interface Props extends Omit<LinkProps, 'to'>, HTMLAttributes<HTMLAnchorElement> {
  color?: 'primary' | 'white';
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ color = 'primary', size = 'small', ...props }: Props) {
  return (
    <Container data-testid="main-logo" to="/" size={size} {...props}>
      {color === 'primary' ? (
        <>
          <LogoPawPrimary />
          <LogoTextPrimary />
        </>
      ) : (
        <>
          <LogoPawWhite />
          <LogoTextWhite />
        </>
      )}
    </Container>
  );
}
