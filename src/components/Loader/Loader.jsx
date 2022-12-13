import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="200"
      width="200"
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#728697"
      innerCircleColor="#b1c8dd"
      middleCircleColor="#000000"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
