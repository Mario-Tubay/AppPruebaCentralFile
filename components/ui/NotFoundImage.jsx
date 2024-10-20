import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NotFoundImage({ width = 180 }) {
    return (
        <Svg
            width={width}
            height={width / 3}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M10.5 15l3-3m0 3l-3-3M22 11.798c0-2.632 0-3.949-.77-4.804a2.984 2.984 0 00-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 01-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 00-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 002.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-3"
                stroke="#1C274C"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default NotFoundImage
