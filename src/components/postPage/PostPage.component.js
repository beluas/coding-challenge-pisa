import React from "react";
import { Route } from "react-router-dom";
import Posts from "../posts/Posts.component";
import SinglePostPage from "../singlePostPage/SinglePostPage.component";
import axios from "axios";

class PostPage extends React.Component {
	state = {
		posts: [],
		comments: [],
		isLoading: true,
	};

	async componentDidMount() {
		const posts = await axios.get("http://localhost:3000/posts");

		const comments = await axios.get("http://localhost:3000/comments");

		this.setState({
			posts: posts.data,
			comments: comments.data,
			isLoading: false,
		});
	}

	render() {
		const { posts } = this.state;

		return (
			<div>
				<Route exact path="/" render={() => <Posts posts={posts} />} />
				<Route
					exact
					path="/posts"
					render={() => <Posts posts={posts} />}
				/>

				<Route
					path={`/posts/:id`}
					render={() => {
						return (
							<SinglePostPage loading={this.state.isLoading} />
						);
					}}
				/>
			</div>
		);
	}
}

export default PostPage;
