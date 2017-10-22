import * as React from "react";
import {CommentIcon} from "./CommentIcon";
import {PANEL_CONTENT_WIDTH} from "../util/Constants";

export interface ICommentCounterProps {
    style: any;
}

class CommentCounterImpl extends React.Component<ICommentCounterProps, {}> {
    public render() {
        return (
            <div className={"pointer"} style={this.props.style}>
                <CommentIcon fill={"#5C7080"} height={PANEL_CONTENT_WIDTH} width={PANEL_CONTENT_WIDTH}/>
                {/*<span style={{color: "white", fontWeight: 900, fontSize: "15px",*/}
                    {/*position: "absolute", top: "3px", left: "6px"}}>10</span>*/}
            </div>
        )
    }
}

export const CommentCounter = CommentCounterImpl;
