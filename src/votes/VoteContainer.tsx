import * as React from "react";
import {Icon} from "@blueprintjs/core";
import {DownVote} from "./DownVote";
import {UpVote} from "./UpVote";
import {PANEL_CONTENT_WIDTH} from "../util/Constants";

class VoteContainerImpl extends React.Component<{}, {count: number}> {
    public componentWillMount() {
        this.setState({count: 0})
    }
    public render() {
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <UpVote className={"selected"} width={PANEL_CONTENT_WIDTH} height={PANEL_CONTENT_WIDTH / 2} />
                <span style={{fontSize: "20px"}}>{this.state.count}</span>
                <DownVote className={"unselected"} width={PANEL_CONTENT_WIDTH} height={PANEL_CONTENT_WIDTH / 2} />
            </div>
        )
    }
}

export const VoteContainer = VoteContainerImpl;
