import React, { Component } from 'react';
import DefaultTemplate from '../../templates/default';
import Gap from '../../gap/gap';
import TButton from '../../buttons/tbutton/tbutton';
import autosize from "autosize";
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

export default class EditComment extends Component {
	componentDidMount() {
	    this.textarea.focus();
	    autosize(this.textarea);
	}

	saveComment () {

	}

	cancelComment () {
		window.history.back();
	}
	
	render () {
		return (
			<DefaultTemplate headerType="edit-type">
				<div className="page-container edit-comment" align="left">
					<Gap hei="3" />
					<div className="content">
						<textarea defaultValue={post.comment.content} ref={c => (this.textarea = c)}/>
						<div className="actions">
							<TButton btntype="btnframe btn-green" rpad="18" lpad="18" clickEvent={this.saveComment.bind(this)}>Save</TButton>
							<TButton btntype="btnnoframe btn-gray" rpad="16" lpad="16" clickEvent={this.cancelComment.bind(this)}>Cancel</TButton>
						</div>
					</div>
				</div>
			</DefaultTemplate>
		);
	}
}