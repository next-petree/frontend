import Banner2 from '../../component/Banner/Banner2';
import { ICLProps } from '../../types';
import { Wrapper } from './styles';

const CustomLayout = ({ height, children }: ICLProps) => {
  return (
    <Wrapper height={height}>
      <Banner2 />
      {children}
    </Wrapper>
  );
};

export default CustomLayout;
