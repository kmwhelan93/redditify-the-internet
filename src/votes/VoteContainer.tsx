import * as React from "react";
import {Icon} from "@blueprintjs/core";
import {DownVote} from "./DownVote";
import {UpVote} from "./UpVote";

class VoteContainerImpl extends React.Component<{}, {count: number}> {
    public componentWillMount() {
        this.setState({count: 0})
    }
    public render() {
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <UpVote className={"selected"} width={20} height={10} />
                {this.state.count}
                <DownVote className={"unselected"} width={20} height={10} />
            </div>
        )
    }
}

export const VoteContainer = VoteContainerImpl;
