import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeCircles
        height="200"
        width="200"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#728697"
        innerCircleColor="#b1c8dd"
        middleCircleColor="#000000"
      />
    </LoaderWrapper>
  );
};
