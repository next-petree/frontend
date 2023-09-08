import { HTMLAttributes, forwardRef } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  position: absolute;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
`;

type Props = HTMLAttributes<HTMLDivElement>;

const Dropdown = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Container ref={ref} {...props}>
      {props.children}
    </Container>
  );
});

export default Dropdown;
