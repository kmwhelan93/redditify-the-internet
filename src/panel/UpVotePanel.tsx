import * as React from "react";
import Draggable from "react-draggable";
import {VoteContainer} from "../votes/VoteContainer";
import {CommentCounter} from "../comments/CommentCounter";
import {CancelIcon} from "../cancel/CancelIcon";

export interface IUpVotePanelProps {}

class UpVotePanelImpl extends React.Component<IUpVotePanelProps, {isOpen: boolean}> {
    public componentWillMount() {
        this.setState({isOpen: true})
    }
    public render() {
        if (!this.state.isOpen) {
            return null;
        }
        return (
            <Draggable>
                <div
                    style={{position: "absolute", left: "10px", top: "100px",
                        zIndex: 10000000}}
                    className={"vertical-list pt-card"}
                >
                    <VoteContainer />
                    <CommentCounter style={{marginBottom: "0px"}} />
                    <CancelIcon style={{width: "12px", height: "12px",
                        position: "absolute", right: "5px", top: "5px",}} fill={"#5C7080"}
                                className={"pointer"} onClick={this.toggleOpen.bind(this)}/>
                </div>
            </Draggable>
        )
    }

    private toggleOpen() {
        this.setState({isOpen: !this.state.isOpen});
    }
}

export const UpVotePanel = UpVotePanelImpl;
