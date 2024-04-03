import CountUp from "react-countup";
import PropTypes from 'prop-types';

export default function Counter(props) {
  return (
    <div className="flex flex-col justify-around">
      <CountUp end={props.endNum} duration={3} enableScrollSpy={true}/>
      <h1>{props.text}</h1>
    </div>
  )
}

Counter.propTypes = {
  endNum: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}