import Counter from "./Count";
import SocialIcon from "./SocialIcon";

export default function About() {
  return (
    <div id="about" className="relative w-full flex justify-center overflow-x-hidden h-[100vh]">
      <div>
        <div className="flex justify-around">
          {/* <Counter endNum={100} text="lines of code" />
          <Counter endNum={1000} text="lines of code" />
          <Counter endNum={100600} text="lines of code" /> */}
        </div>
      </div>
      <div className="w-full flex justify-around items-center">
        <SocialIcon iconName="telegram" shadowName="telegram" />
        <SocialIcon iconName="phone" shadowName="phone" />
        <SocialIcon iconName="chat-bubble-left" shadowName="message" />
      </div>
    </div>
  );
}