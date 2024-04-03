import PropTypes from 'prop-types';
import svgs from "../../assets/svgs/svgs.svg";
export default function NavbarIcon(props) {
  return (
    <a href={'#' + props.text}>
      <div className="flex flex-col justify-center items-center text-[#676D75] hover:text-[#9E86FF] ease-in duration-200 cursor-pointer mt-5 mb-5">
        <svg className="h-8 sm:h-10 w-8 sm:w-10">
          <use href={svgs + "#" + props.iconName} />
        </svg>
        <p className="hidden sm:block">{props.text}</p>
      </div>
    </a>
  )
}
NavbarIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string,
}