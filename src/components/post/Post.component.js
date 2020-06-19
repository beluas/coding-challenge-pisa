import React from "react";
import { withRouter } from "react-router-dom";
import "./post.styles.scss";

const Post = ({ id, title, author, body, history }) => {
	return (
		<div onClick={() => history.push(`/posts/${id}`)}>
			<div className="post">
				<div className="img">
					<img
						src="https://dummyimage.com/150X150/000/fff"
						alt="dummyImg"
					/>
				</div>
				<div className="text">
					<div className="titles-info">
						<h2>{title}</h2>
						<span className="line"></span>
						<h2>{author}</h2>
					</div>
					<p>{body.substring(0, 120) + " ..."}</p>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Post);
