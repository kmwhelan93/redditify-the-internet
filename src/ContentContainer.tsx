import * as React from "react";
import {Button} from "@blueprintjs/core";
import {VoteContainer} from "./votes/VoteContainer";

const onClick = () => console.log("HI!");

class ContentContainerImpl extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <VoteContainer />
            </div>
        )
    }
}

export const ContentContainer = ContentContainerImpl;
