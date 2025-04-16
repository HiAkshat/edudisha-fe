import { IconProps } from "./types";
import iconify from "@/hoc/iconify";

const Instagram = (props: IconProps): React.ReactElement => {
  const { height, width, fillPath, align } = props;
  return (
    <svg
      style={{ verticalAlign: align }}
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.4 5.5A4.5 4.5 0 0 1 5.9 1h5a4.5 4.5 0 0 1 4.5 4.5v5a4.5 4.5 0 0 1-4.5 4.5h-5a4.5 4.5 0 0 1-4.5-4.5v-5zM5.9 2a3.5 3.5 0 0 0-3.5 3.5v5A3.5 3.5 0 0 0 5.9 14h5a3.5 3.5 0 0 0 3.5-3.5v-5A3.5 3.5 0 0 0 10.9 2h-5z"
        fill={fillPath}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.4 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.9 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
        fill={fillPath}
      />
      <path
        d="M12.732 4.213a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
        fill={fillPath}
      />
    </svg>
  );
};

Instagram.defaultProps = {
  width: 17,
  height: 16,
  align: "middle",
  fillPath: "#1D2025",
} as IconProps;

export default iconify(Instagram);
