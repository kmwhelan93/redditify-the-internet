import * as React from "react";
import * as moment from "moment";
import {Colors} from "@blueprintjs/core";

export interface ICommentProps {
    text: string;
    author: string;
    createdDateTime: Date;
    votes: number;
}

class CommentImpl extends React.Component<ICommentProps, {}> {
    public render() {
        const {author, text, createdDateTime} = this.props;
        return (
            <div className="vertical-list">
                <div className="horizontal-list" style={{color: Colors.GRAY2}}>
                    {author} * {moment(createdDateTime).fromNow()}
                </div>
            </div>
        )
    }
}

export const Comment = CommentImpl;
