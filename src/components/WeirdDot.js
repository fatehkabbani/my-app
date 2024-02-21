import DotImage1 from './../images/dots-1.png';
import DotImage2 from './../images/dots-2.png';
function WeirdDot(props) {
  return (
      <img className='' src={props.imageChoice ? DotImage1 : DotImage2} style={
        {
          position: 'absolute',
          top: `${props.top}%`,
          left: `${props.left}%`,
          transform: `translate(-50%, -50%)`,
          scale: props.scale ? props.scale : 1,
          width: '250px',
          height: '250px',
          zIndex: props.zIndex ? props.zIndex : -100,
        }
      } />
    );
}
export default WeirdDot;