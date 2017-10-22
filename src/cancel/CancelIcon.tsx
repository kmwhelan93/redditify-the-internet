import * as React from "react";

class CancelIconImpl extends React.Component<React.SVGProps<SVGSVGElement>, {}> {
    public render() {
        return (
            <svg version="1.1" id="Layer_1" x="0px" y="0px" {...this.props}>
                <g id="small_cross_mark_1_">
                    <g>
                        <path
                              d="M9.41,8l2.29-2.29C11.89,5.53,12,5.28,12,5c0-0.55-0.45-1-1-1c-0.28,0-0.53,0.11-0.71,0.29L8,6.59L5.71,4.29C5.53,4.11,5.28,4,5,4C4.45,4,4,4.45,4,5c0,0.28,0.11,0.53,0.29,0.71L6.59,8l-2.29,2.29C4.11,10.47,4,10.72,4,11c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29L8,9.41l2.29,2.29C10.47,11.89,10.72,12,11,12c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L9.41,8z"/>
                    </g>
                </g>
            </svg>
        )
    }
}

export const CancelIcon = CancelIconImpl;
