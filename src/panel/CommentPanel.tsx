import * as React from "react";
import * as Redux from "redux";
import {connect} from "react-redux";
import {IAppState} from "../state/state";
import * as classNames from "classnames";

export interface ICommentPanelProps {
}

interface IConnectedProps {
    showComments: boolean;
}

interface IConnectedCallbacks {
}

interface IComponentProps extends IConnectedProps, IConnectedCallbacks, ICommentPanelProps {
}

class CommentPanelImpl extends React.Component<IComponentProps, {}> {
    public render() {
        return (
            <div className={
                classNames(
                    {
                        "show-comments": this.props.showComments,
                        "hide-comments": !this.props.showComments
                    })
            }
                 style={{position: "fixed", right: -1, top: 0, height: "100%", zIndex: 100000}}
            >
                <div
                    className={classNames("pt-card")}
                    style={{height: "100%"}}
                >

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
