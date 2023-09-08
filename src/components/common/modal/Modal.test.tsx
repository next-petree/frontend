import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { ReactNode } from 'react';
import Modal from './Modal';

const Wrapper = ({ children }: { children: ReactNode }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

describe('모달 컴포넌트', () => {
  it('렌더링 되어야 한다.', () => {
    const { baseElement } = render(<Modal>test</Modal>, {
      wrapper: Wrapper,
    });

    expect(baseElement).toHaveTextContent('test');
  });

  it('hasCloseButton 옵션이 주어지면 닫기 버튼이 렌더링 되어야한다.', () => {
    render(<Modal option={{ hasCloseButton: true }}>test</Modal>, {
      wrapper: Wrapper,
    });

    expect(screen.getByLabelText('modal-close-button')).toBeInTheDocument();
  });

  it('accept 옵션이 주어지면 확인 버튼이 렌더링 되어야하고, 클릭 시 주어진 함수를 실행하고 모달은 닫혀야 한다.', async () => {
    // TODO: 작성 예정
  });
});
