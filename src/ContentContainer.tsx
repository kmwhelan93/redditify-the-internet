import * as React from "react";
import {UpVotePanel} from "./panel/UpVotePanel";
import {CommentPanel} from "./panel/CommentPanel";

const onClick = () => console.log("HI!");

class ContentContainerImpl extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <CommentPanel />
                <UpVotePanel />
            </div>
        )
    }
}

export const ContentContainer = ContentContainerImpl;
