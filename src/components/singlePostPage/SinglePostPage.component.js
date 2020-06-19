import React from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import FormToAddComment from "../formToAddComment/FormToAddComment.component";
import "./singlePostPage.styles.scss";
import Comment from "../comment/Comment.component";
import { Link } from "react-router-dom";

class SinglePostPage extends React.Component {
	state = {
		post: null,
		commentsToShow: [],
		commentsLength: 0,
	};

	fetchContent = async () => {
		const post = await Axios.get(
			`http://localhost:3000/posts/${this.props.match.params.id}`
		);

		const comments = await Axios.get(`http://localhost:3000/comments/`);

		const commentsToShow = comments.data.filter(
			(comment) =>
				parseInt(comment.postId) ===
				parseInt(this.props.match.params.id)
		);

		this.setState({
			post: post.data,
			commentsToShow: [...commentsToShow],
			commentsLength: comments.data.length,
		});
	};

	async componentDidMount() {
		this.fetchContent();
	}

	render() {
		if (this.state.post) {
			const { title, body } = this.state.post;
			return (
				<div className="single-post-page">
					<Link to="/"> {`< Return to all posts`}</Link>

					<h1>{title}</h1>

					<p>{body}</p>
					<div className="comments">
						<h2>Comments</h2>
						{this.state.commentsToShow
							? this.state.commentsToShow.map((comment) => (
									<Comment
										name={comment.name}
										body={comment.body}
										key={comment.id}
									/>
							  ))
							: "wait for comments"}
					</div>
					<FormToAddComment
						postId={this.props.match.params.id}
						id={this.state.commentsLength}
					/>
				</div>
			);
		} else {
			return "wait";
		}
	}
}

export default withRouter(SinglePostPage);
