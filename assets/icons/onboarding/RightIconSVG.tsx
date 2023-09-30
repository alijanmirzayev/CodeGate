import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightIconSVG(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.4 7.868L9.923 6.39 7.515 3.983c-.51-.503-1.38-.143-1.38.577V13.44c0 .72.87 1.08 1.38.57l3.885-3.885a1.598 1.598 0 000-2.257z"
        fill="#FAFAFA"
      />
    </Svg>
  )
}

export default RightIconSVG