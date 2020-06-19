import React from "react";
import Post from "../post/Post.component";
import "./posts.styles.scss";

class Posts extends React.Component {
	render() {
		const { posts } = this.props;

		return (
			<div>
				<h1>Posts</h1>

				{posts
					? posts.map((post) => <Post key={post.id} {...post} />)
					: "wait"}
			</div>
		);
	}
}

export default Posts;
