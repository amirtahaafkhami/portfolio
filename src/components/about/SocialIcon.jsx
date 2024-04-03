import PropTypes from "prop-types"
import svgs from "../../assets/svgs/svgs.svg"
export default function SocialIcon(props) {
  return (
    <div className="w-[100px] h-[100px] flex justify-center items-center">
      <div id={`social-shadow-${props.shadowName}`} className="shadow-sm shadow-[#e8e8e8] transition-all rounded-full h-20 hover:h-[100px] w-20 hover:w-[100px] flex items-center justify-center cursor-pointer">
          <svg className="transition-all h-[100%] pt-6 pb-6 hover:pt-0 hover:pb-0 hover:h-11 text-[#e8e8e8]">
            <use href={svgs + "#" + props.iconName} />
          </svg>
      </div>
    </div>
  )
}
SocialIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  shadowName: PropTypes.string.isRequired
}