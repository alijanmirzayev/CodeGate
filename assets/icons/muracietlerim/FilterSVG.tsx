import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FilterSVG(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.5 1.75h11c.917 0 1.667.75 1.667 1.667V5.25c0 .667-.417 1.5-.834 1.917l-3.583 3.166c-.5.417-.833 1.25-.833 1.917v3.583c0 .5-.333 1.167-.75 1.417L10 18c-1.083.667-2.583-.083-2.583-1.417v-4.416c0-.584-.333-1.334-.667-1.75L3.583 7.083c-.416-.416-.75-1.166-.75-1.666V3.5c0-1 .75-1.75 1.667-1.75zM9.108 1.75L5 8.333"
        stroke="#7F7F7F"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FilterSVG