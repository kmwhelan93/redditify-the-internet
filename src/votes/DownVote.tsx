import * as React from "react";

class DownVoteImpl extends React.Component<React.SVGProps<SVGSVGElement>, {}> {
    public render() {
        return (
            <svg cursor={"pointer"} width="62px" height="33px" viewBox="0 0 62 33" version="1.1" {...this.props}>
                <g id="Vote" transform="translate(30.500000, 16.500000) rotate(180.000000) translate(-30.500000, -16.500000) translate(0.000000, 1.000000)" stroke="#979797">
                    <polygon id="Path" points="30.0507812 0.4921875 60.0605469 20.6347656 60.0605469 30.7773438 30.0507812 10.6347656 0.080078125 30.7773438 0.080078125 20.6347656"></polygon>
                </g>
            </svg>
        )
    }
}

export const DownVote = DownVoteImpl;
