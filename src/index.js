import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";

const App = () => {

    return(
        <div className="ui container comments">
           <CommentDetail autor="Sam"
                          avatarImage={faker.image.avatar()}
                          timeAgo="Today at 04:00 PM"
                          commentText="Gigi is the best developer"
           />
           <CommentDetail autor="Jake"
                          avatarImage={faker.image.avatar()}
                          timeAgo="Today at 02:00 AM"
                          commentText="React is best library"

           />
           <CommentDetail autor="Gigi"
                          avatarImage={faker.image.avatar()}
                          timeAgo="Yesterday at 02:40 PM"
                          commentText="I want to go home"

           />
        </div>
    )
}

ReactDOM.render(<App />,document.querySelector('#root'))