import { AliveIcon, DeadIcon, DefaultIcon } from "./svgIcons";

function DotSwitch({ state }) {
  const Dot = (state) => {
    switch (state) {
      case "alive":
        return <AliveIcon />;
      case "dead":
        return <DeadIcon />;

      default:
        return <DefaultIcon />;
    }
  };

  return <>{Dot(state)}</>;
}
export default DotSwitch;
