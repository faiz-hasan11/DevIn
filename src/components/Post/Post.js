import React, { useState  , useEffect} from 'react'
import "./Post.css"
import { MdPerson} from "react-icons/md"
function Post({ question,postId ,user , db }) {
    const [comments,setComments] = useState([])
    const [comment,setComment] = useState("")

    console.log(postId,question)

    useEffect(() => {
    //   let unsubscribe;
      if (postId) {
        db
          .collection("question")
          .doc(postId)
          .collection("comments")
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
          });
      }
    //    return () => {
    //     unsubscribe();
    //   };
    }, [postId]);

    const postComment = (e) => {
      e.preventDefault();
      db.collection("question").doc(postId).collection("comments").add({
        text: comment,
        username: user.displayName,
      });
      setComment("");
    }



    return (
        <div className="post">
            <div className="post_header">
                <MdPerson fontVariant="h3"/>
                <h3>{question.username}</h3>
            </div>
            <b >{question.username}</b> {question.question}
            <div className="post__comments">
                {comments.map((comment) => (
                    <p style={{border:"1px solid black"}}>
                        <b style={{float:"left"}}>{comment.username}</b> {comment.text}
                    </p>
                ))}
                
            </div>
            {user && (
                <form className="post_commentBox">
                    <input className="post_input" type="text" placeholder="Add a Comment" value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <button  className="post_button" type="submit" onClick={postComment}>Post</button>
                </form>
            )}
        </div>
    )
}

export default Post
