import React, { Component } from 'react';
import ReactModal from 'react-modal';
import DefaultTemplate from '../../templates/default';
import TIcon from '../../icon-svg/icon-svg';
import Gap from '../../gap/gap';
import './post.scss';

const post = {
	postid: 123,
	postdate: 'July 5, 2018',
	title: 'The Will, the Intellect and the Fantasy According to Screwtape',
	content: "Think of your man as a series of concentric circles, his will being the innermost, his intellect coming next, and finally his fantasy. You can hardly hope, at once, to exclude from all the circles everything that smells of the Enemy: but you ... must keep on shoving all the virtues outward till they are finally located in the circle of fantasy, and all the desirable qualities inward into the Will. It is only in so far as they reach the will and are there embodied in habits that the virtues are really fatal to us. (I do not, of course, mean what the patient mistakes for his will, the conscious fume and fret of resolutions and clenched teeth, but the real centre, what the Enemy calls the Heart.)\n\nAll sorts of virtues painted in the fantasy or approved by the intellect or even, in some measure, loved and admired, will not keep a man from our Father's house: indeed they may make him more amusing when he gets there.",
	publication: 'The Screwtape Letters',
	authors: ['C.S. Lewis', 'John Pollock'],
	location: '61',
	tags: ["will", "intellect", "fantasy", "admired", "resolutions", "concentric circles", "hope", "desirable qualities", "virtues"],
	comment: {
		content: "This book is, in a sense, a book on sin and sins. Too lay out everything Lewis says about sin and sins in this little book would require a book length commentary, as such, we will only note one comment that C. S. Lewis makes, which are particularly interesting. He proposes that all sin is rooted in the future, saying, “nearly all vices are rooted in the future. Gratitude looks to the past and love to the present; fear, avarice, lust, and ambition look ahead. Do not think lust an exception."
	}
};

class Tag extends Component {
	onTagDetail (tagname) {
		window.location.href="/post-list?type=tag-filter&search=" + tagname;
	}

	render () {
		return (
			<div className='tag' onClick={this.onTagDetail.bind(this, this.props.children)}>{this.props.children}</div>
		);
	}
}

export default class PostList extends Component {
	constructor(){
		super();
		this.state = {
			showSettingMenu: false,
			showTrashModalOpen: false
		};

		this.showSettingMenu = this.showSettingMenu.bind(this);
    	this.closeSettingMenu = this.closeSettingMenu.bind(this);

    	this.onOpenTrashModal = this.onOpenTrashModal.bind(this);
		this.onCloseTrashModal = this.onCloseTrashModal.bind(this);
	}

	componentDidMount() {
	    ReactModal.setAppElement('body');
	};

	onOpenTrashModal = () => {
	    this.setState({ showTrashModalOpen: true });
	};
	 
	onCloseTrashModal = () => {
	    this.setState({ showTrashModalOpen: false });
	};

	showSettingMenu(event) {
	    event.preventDefault();
	    
	    this.setState({ showSettingMenu: true }, () => {
	    	document.addEventListener('click', this.closeSettingMenu);
	    });
	}

	closeSettingMenu() {
	    this.setState({ showSettingMenu: false }, () => {
	    	document.removeEventListener('click', this.closeSettingMenu);
	    });
	}

	onPostSearch (type, con) {
		window.location.href = "/post-list?type=" + type + "&search=" + con;
	}

	render() {
		let tags = post.tags.map((tag, index) =>
			<Tag key={index}>{tag}</Tag>
		);

		let authorlist = post.authors.map((author, index) => 
			index === 0 ? (author) : (", " + author));

		return (
			<DefaultTemplate>
				<div className="page-container post" align="left">
					<Gap hei="3" />
					<div className="content">
						<div className="post-setting" align="right">
							<TIcon cl="btn-icon" icon="cog" wid="27" hei="27" fcolor="#757575" onIconClick={this.showSettingMenu}/>
							{
	    						this.state.showSettingMenu ? (
		    					<div className="sub-menu">
		    						<ul className="setting-menu">
		    							<li><a href="/edit-title-excerpt"><div>Edit Title/Excerpt</div></a></li>
		    							<li><a href="/edit-citation"><div>Edit Citation</div></a></li>
		    							<li><a href="/edit-tags"><div>Edit Tags</div></a></li>
		    							<li><a href="/edit-comment"><div>Edit Comment</div></a></li>
		    							<li><div>Export to PDF</div></li>
		    							<li><div>Print</div></li>
		    							<li><div onClick={this.onOpenTrashModal} className="trash">Trash</div></li>
		    						</ul>
		    					</div>
		    					) : (
		    						null
		    					)
	    					}
	    					<ReactModal 
					           isOpen={this.state.showTrashModalOpen}
					           contentLabel=""
					           onRequestClose={this.onCloseTrashModal}
					           style={{
							    overlay: {
							      position: 'fixed',
							      top: 0,
							      left: 0,
							      right: 0,
							      bottom: 0,
							      backgroundColor: 'rgba(243, 236, 223	, 0.9)'
							    },
							    content: {
							      position: 'absolute',
							      top: '153px',
							      left: 'calc(50% - 221px)',
							      width: '442px',
							      height: '231px',
							      borderRadius: '5px',
							      borderColor: '#e7e3db',
							      padding: 0,
							      background: '#fbf7f0'
							    }
							  }}
					        >
					        	<div className="deactive-modal" align="center">
					        		<p>Are you sure you want to permanently delete this post from your archive?</p>
					        		<Gap hei="14"/>
					        		<button className="confirm-deactive">Trash Post</button>
					        		<Gap hei="14"/>
					        		<div className="cancel-deactive" onClick={this.onCloseTrashModal}>Nevermind</div>
					        	</div>
					        </ReactModal>
						</div>
						<div className="citations">
							<div className="citation" onClick={this.onPostSearch.bind(this, 'date-filter', post.postdate)}>
								<div className="icon">
									<TIcon icon="calendar" wid="18" hei="20" fcolor="#757575"/>
								</div>
								<span>{post.postdate}</span>
							</div>

							<div className="citation" onClick={this.onPostSearch.bind(this, 'search-filter', post.publication)}>
								<div className="icon">
									<TIcon icon="book" wid="18" hei="18" fcolor="#757575"/>
								</div>
								<span>{post.publication}</span>
							</div>

							<div className="citation" onClick={this.onPostSearch.bind(this, 'author-filter', authorlist)}>
								<div className="icon">
									<TIcon icon="quote" wid="18" hei="20" fcolor="#757575"/>
								</div>
								<span>{authorlist}</span>
							</div>

							<div className="citation">
								<div className="icon">
									<TIcon icon="pushpin2" wid="18" hei="20" fcolor="#757575"/>
								</div>
								<span>{post.location}</span>
							</div>
						</div>

						<Gap hei="23" />
						<span className="post-title">{post.title}</span>
						<Gap hei="5" />
						<p className="post-content">{post.content}</p>
						<Gap hei="11" />
						<div className="post-line"></div>
						<div className="tag-list">
							{tags}
						</div>

						<div className="post-line"></div>
						<Gap hei="36" />
						<div className="comment">
							<div className="comment-head">
								<TIcon icon="message-circle" wid="20" hei="20" fcolor="#111111"></TIcon>
								<span>Comments</span>
							</div>
							<Gap hei="29" />
							<p className="">{post.comment.content}</p>	
						</div>
					</div>
				</div>
			</DefaultTemplate>
		);
	}
}