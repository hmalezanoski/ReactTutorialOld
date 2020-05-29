import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./AppruvalCard";

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail autor="Sam"
                               avatarImage={faker.image.avatar()}
                               timeAgo="Today at 04:00 PM"
                               commentText="Gigi is the best developer"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail autor="Jake"
                               avatarImage={faker.image.avatar()}
                               timeAgo="Today at 02:00 AM"
                               commentText="React is best library"

                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail autor="Gigi"
                               avatarImage={faker.image.avatar()}
                               timeAgo="Yesterday at 02:40 PM"
                               commentText="I want to go home"

                />
            </ApprovalCard>


        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))