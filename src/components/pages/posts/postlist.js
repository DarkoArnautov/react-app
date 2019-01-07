import React, { Component } from 'react';
import DefaultTemplate from '../../templates/default';
import TButton from '../../buttons/tbutton/tbutton';
import Gap from '../../gap/gap';
import PostItem from '../../postitem/postitem';
import './post.scss';

const postlist = [{
		postid: 123,
		postdate: 'July 5, 2018',
		title: 'The Will, the Intellect and the Fantasy According to Screwtape',
		content: 'Think of your man as a series of concentric circles, his will being the innermost, his intellect coming next, and finally his fantasy. You can hardly hope, at once, to exclude from all the circles everything that smells of the Enemy: but you must keep on shoving all the virtues outward till they are finally located in the circle of fantasy, and all the desirable qualities inward into the Will. It is only in so far as they reach the will and are there embodied in habits that the virtues are really fatal to us. (I do not, of course, mean what the patient mistakes for his will, the conscious fume and fret of resolutions and clenched teeth, but the real centre, what the Enemy calls the Heart.)',
		publication: 'The Screwtape Letters',
		authors: ['C.S. Lewis', 'John Pollock'],
		location: '61'
	}, {
		postid: 116,
		postdate: 'July 2, 2018',
		title: 'The Compelling Majesty of His Power',
		content: 'Think of your man as a series of concentric circles, his will being the innermost, his intellect coming next, and finally his fantasy. You can hardly hope, at once, to exclude from all the circles everything that smells of the Enemy: but you must keep on shoving all the virtues outward till they are finally located in the circle of fantasy, and all the desirable qualities inward into the Will. It is only in so far as they reach the will and are there embodied in habits that the virtues are really fatal to us. (I do not, of course, mean what the patient mistakes for his will, the conscious fume and fret of resolutions and clenched teeth, but the real centre, what the Enemy calls the Heart.)',
		publication: 'My Utmost for His Highest',
		authors: ['Oswald Chambers'],
		location: '96'
}];

export default class PostList extends Component {
	

	constructor(props){
		super();

		const queryString = require('query-string');
		const parsed = queryString.parse(props.location.search);
		this.postpagetype = parsed.type;
		this.search = parsed.search;
	}

	render() {
		const postItems = postlist.map((post, index) =>
			<PostItem data={post} key={index}></PostItem>
		);

		return (
			<DefaultTemplate>
				<div className="page-container post-list" align="left">
					
					<div className="content postlist">
						{
							this.postpagetype === 'tag-filter' ? (
								<div className="filter-header">
									<span className="fh-title">tagged in</span>
									<Gap hei="35" />
									<div className="tag">{this.search}</div>
									<Gap hei="41" />
									<div className="filter-line"></div>
									<Gap hei="35" />
								</div>
							) : (null)
						}
						{
							this.postpagetype === 'search-filter' ? (
								<div className="filter-header">
									<span className="fh-title">search</span>
									<Gap hei="42" />
									<input type="text" defaultValue={this.search} />
									<Gap hei="4" />
									<div className="filter-line"></div>
									<Gap hei="35" />
								</div>
							) : (null)
						}
						{
							this.postpagetype === 'date-filter' ? (
								<div className="filter-header">
									<span className="fh-title">sort by</span>
									<Gap hei="35" />
									<span className="filter-content">{this.search}</span>
									<Gap hei="37" />
									<div className="filter-line"></div>
									<Gap hei="35" />
								</div>
							) : (null)
						}
						{
							this.postpagetype === 'title-filter' ? (
								<div className="filter-header">
									<span className="fh-title">sort by</span>
									<Gap hei="35" />
									<div className="filter-content">{this.search}</div>
									<Gap hei="37" />
									<div className="filter-line"></div>
									<Gap hei="35" />
								</div>
							) : (null)
						}
						{
							this.postpagetype === 'author-filter' ? (
								<div className="filter-header">
									<span className="fh-title">sort by</span>
									<Gap hei="35" />
									<span className="filter-content">{this.search}</span>
									<Gap hei="37" />
									<div className="filter-line"></div>
									<Gap hei="35" />
								</div>
							) : (null)
						}
						<Gap hei="3" />
						{postItems}
						<div className="action" align="center">
							<TButton btntype="btnframe btn-green" rpad="23" lpad="23">Load more</TButton>
						</div>
					</div>
				</div>
			</DefaultTemplate>
		);
	}
}