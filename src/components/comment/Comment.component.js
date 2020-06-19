import React from "react";
import "./comment.styles.scss";

const Comment = ({ name, body }) => {
	return (
		<div className="comment-box">
			<div className="post-box">
				<img
					src="https://dummyimage.com/150X150/000/fff"
					alt="Dummy Image"
				/>
				<div className="desc">
					<h3>{name}</h3>
					<p>{body}</p>
				</div>
			</div>

			<hr />
		</div>
	);
};

export default Comment;
