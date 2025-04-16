import { IconProps } from "@/components/atoms/icons/types.d";
import React from "react";

const iconify = (CustomIcon: React.ElementType) => {
  return (props: IconProps): React.ReactElement => {
    return (
      <span style={{ lineHeight: 0 }}>
        &nbsp;
        <CustomIcon {...props} />
        &nbsp;
      </span>
    );
  };
};

export default iconify;
