import React from "react";

interface Iprops {
  color?: string;
}

export default function EditIcon(props: Iprops) {
  const { color } = props;


return (
    <svg
    width={3}
    height={15}
    viewBox="0 0 3 15"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 1.875C3 0.84375 2.325 -2.95052e-08 1.5 -6.55671e-08C0.675 -1.01629e-07 6.78374e-07 0.84375 6.33297e-07 1.875C5.8822e-07 2.90625 0.675 3.75 1.5 3.75C2.325 3.75 3 2.90625 3 1.875ZM3 13.125C3 12.0938 2.325 11.25 1.5 11.25C0.675 11.25 1.86621e-07 12.0937 1.41544e-07 13.125C9.64664e-08 14.1562 0.675 15 1.5 15C2.325 15 3 14.1562 3 13.125ZM3 7.5C3 6.46875 2.325 5.625 1.5 5.625C0.675 5.625 4.32498e-07 6.46875 3.8742e-07 7.5C3.42343e-07 8.53125 0.675 9.375 1.5 9.375C2.325 9.375 3 8.53125 3 7.5Z"
      fill={color}
    />
  </svg>
)

}