import * as React from "react";

class CommentIconImpl extends React.Component<React.SVGProps<SVGSVGElement>, {}> {
    public render() {
        return (
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 20 20" {...this.props}>
                <g id="comment_1_">
                    <g>
                        <path d="M19,1H1C0.45,1,0,1.45,0,2v12c0,0.55,0.45,1,1,1h3v4c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29L10.41,15H19c0.55,0,1-0.45,1-1V2C20,1.45,19.55,1,19,1z M4,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C6,9.1,5.1,10,4,10z M10,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C12,9.1,11.1,10,10,10z M16,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C18,9.1,17.1,10,16,10z"/>
                    </g>
                </g>
            </svg>
        )
    }
}

export const CommentIcon = CommentIconImpl;
