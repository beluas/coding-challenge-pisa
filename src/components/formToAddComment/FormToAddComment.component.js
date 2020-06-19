import React from "react";
import Axios from "axios";
import "./formToAddComment.styles.scss";

class FormToAddComment extends React.Component {
	state = {
		name: "",
		email: "",
		body: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { postId, id } = this.props;
		const { name, email, body } = this.state;

		const data = {
			postId: postId,
			id: id + 1,
			name: name,
			email: email,
			body: body,
		};
		this.setState({ name: "", email: "", body: "" });
		const jsonData = JSON.stringify(data);
		Axios({
			method: "post",
			headers: { "Content-Type": "application/json" },
			url: "http://localhost:3000/comments",
			data: jsonData,
		});

		window.location.reload(true);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<>
				<h1>Feel free to share your thoughts </h1>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div className="name-and-email-box">
						<div className="name">
							<label> Your Name : </label>
							<input
								value={this.state.name}
								onChange={this.handleChange}
								type="text"
								name="name"
								required
							/>
						</div>
						<div className="email">
							<label> Your Email </label>
							<input
								value={this.state.email}
								onChange={this.handleChange}
								type="text"
								name="email"
							/>
						</div>
					</div>

					<div className="textarea-and-submit">
						<textarea
							onChange={this.handleChange}
							name="body"
							value={this.state.body}
							cols="10"
							rows="5"
							required
						></textarea>

						<button className="submit" type="submit">
							Send
						</button>
					</div>
				</form>
			</>
		);
	}
}

export default FormToAddComment;
