import React, { Component } from 'react';
import TIcon from '../icon-svg/icon-svg';
import Gap from '../gap/gap';
import './postitem.scss';

export default class PostItem extends Component {
	postDetailView () {
		window.location.href="/post";
	}

	render () {
		return (
			<div className="post-item">
				<div className="post-item-content">
					<div className="citation">
						<div className="icon">
							<TIcon icon="calendar" wid="18" hei="20" fcolor="#757575"/>
						</div>
						<span>{this.props.data.postdate}</span>
					</div>
					<Gap hei="23" />
					<span className="post-title" onClick={this.postDetailView.bind(this)}>{this.props.data.title}</span>
					<Gap hei="5" />
					<p className="post-content" style={{WebkitBoxOrient: 'vertical'}}>{this.props.data.content}</p>
					<Gap hei="11" />
					<div className="citation">
						<div className="icon">
							<TIcon icon="book" wid="18" hei="18" fcolor="#757575"/>
						</div>
						<span>{this.props.data.publication}</span>
					</div>

					<div className="citation">
						<div className="icon">
							<TIcon icon="quote" wid="18" hei="20" fcolor="#757575"/>
						</div>
						<span>{this.props.data.authors.map((author, index) => index === 0 ? author : ", " + author)}</span>
					</div>

					<div className="citation">
						<div className="icon">
							<TIcon icon="pushpin2" wid="18" hei="20" fcolor="#757575"/>
						</div>
						<span>{this.props.data.location}</span>
					</div>
				</div>

				<Gap hei="34" />
				<div className="post-line"></div>
				<Gap hei="39" />
			</div>
		);
	}
}