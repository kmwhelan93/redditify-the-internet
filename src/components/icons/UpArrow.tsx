import * as React from "react";

class UpArrowImpl extends React.Component<React.SVGProps<SVGSVGElement>, {}> {
    public render() {
        return (
            <svg version="1.1" id="Layer_1" x="0px" y="0px" {...this.props}>
                <g id="caret_up_1_">
                    <g>
                        <path
                            d="M11.87,9.17C11.87,9.17,11.88,9.17,11.87,9.17l-3.5-4l0,0C8.28,5.07,8.15,5,8,5S7.72,5.07,7.63,5.17l0,0l-3.5,4l0,0C4.05,9.26,4,9.37,4,9.5C4,9.78,4.22,10,4.5,10h7c0.28,0,0.5-0.22,0.5-0.5C12,9.37,11.95,9.26,11.87,9.17z"/>
                    </g>
                </g>
            </svg>
        )
    }
}

export const UpArrow = UpArrowImpl;
