import * as React from "react";
import {CommentIcon} from "./CommentIcon";

export interface ICommentCounterProps {}

class CommentCounterImpl extends React.Component<ICommentCounterProps, {}> {
    public render() {
        return (
            <div className={"pointer"}>
                <CommentIcon fill={"#5C7080"}/>
                {/*<span style={{color: "white", fontWeight: 900, fontSize: "15px",*/}
                    {/*position: "absolute", top: "3px", left: "6px"}}>10</span>*/}
            </div>
        )
    }
}

export const CommentCounter = CommentCounterImpl;
