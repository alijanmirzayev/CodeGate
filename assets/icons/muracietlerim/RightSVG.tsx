import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightSVG(props) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.322 4.448L15.875 9l-4.553 4.553M3.125 9h12.623"
        stroke="#5E5CA2"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RightSVG