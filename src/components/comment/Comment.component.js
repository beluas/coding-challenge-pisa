import React from "react";
import "./comment.styles.scss";

const Comment = ({ name, body }) => {
	return (
		<div className="comment-box">
			<h3>{name}</h3>
			<p>{body}</p>
			<hr />
		</div>
	);
};

export default Comment;
