import * as React from "react";
import * as Redux from "redux";
import {connect} from "react-redux";
import {IAppState} from "../state/state";

export interface ICommentPanelProps {}

interface IConnectedProps {
    showComments: boolean;
}

interface IConnectedCallbacks {}

interface IComponentProps extends IConnectedProps, IConnectedCallbacks, ICommentPanelProps {}

class CommentPanelImpl extends React.Component<IComponentProps, {}> {
    public render() {
        if (!this.props.showComments) {
            return null;
        }
        return (
            <div>
                <div className="pt-card" style={{width: "200px"}}>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state: IAppState, ownProps: ICommentPanelProps): IConnectedProps {
    return {
        showComments: state.showComments,
    };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<IAppState>): IConnectedCallbacks {
    return {};
}

export const CommentPanel = connect(mapStateToProps, mapDispatchToProps)(
    CommentPanelImpl,
);
