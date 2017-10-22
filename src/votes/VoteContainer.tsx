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
                <UpVote className={"selected"} width={30} height={15} />
                <span style={{fontSize: "20px"}}>{this.state.count}</span>
                <DownVote className={"unselected"} width={30} height={15} />
            </div>
        )
    }
}

export const VoteContainer = VoteContainerImpl;
