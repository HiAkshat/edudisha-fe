import iconify from "@/hoc/iconify";
import { IconProps } from "./types.d";

const FileIcon = (props: IconProps): React.ReactElement => {
  return (
    <svg
      width={props.width}
      height={props.width}
      style={{ verticalAlign: props.align }}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 2A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V5.64c0-.409-.187-.795-.508-1.048L9.565 2.286A1.333 1.333 0 0 0 8.74 2H4.5zM2 3.5A2.5 2.5 0 0 1 4.5 1h4.24c.523 0 1.032.176 1.444.5l2.927 2.307c.561.442.889 1.118.889 1.833v6.86a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-9z"
        fill={props.fillPath}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1h-6.5a.5.5 0 0 1-.5-.5zM4.25 10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zM8 1.875h1v3.041c0 .236.191.428.429.428h3.665v1H9.429A1.428 1.428 0 0 1 8 4.916V1.875z"
        fill={props.fillPath}
      />
    </svg>
  );
};

FileIcon.defaultProps = {
  width: 16,
  height: 16,
  align: "middle",
  fillPath: "#C5C6C7",
} as IconProps;

export default iconify(FileIcon);
