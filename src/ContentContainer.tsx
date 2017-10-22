import * as React from "react";
import {Button} from "@blueprintjs/core";
import {VoteContainer} from "./votes/VoteContainer";
import {CommentCounter} from "./comments/CommentCounter";

const onClick = () => console.log("HI!");

class ContentContainerImpl extends React.Component<{}, {}> {
    public render() {
        return (
            <div
                style={{position: "absolute", left: "20px", top: "100px",
                    zIndex: 10000000}}
                className={"vertical-list pt-card"}
            >
                <VoteContainer />
                <CommentCounter  />
            </div>
        )
    }
}

export const ContentContainer = ContentContainerImpl;
