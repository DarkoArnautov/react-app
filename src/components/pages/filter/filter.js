import React, { Component } from 'react';
import DefaultTemplate from '../../templates/default';
import Gap from '../../gap/gap';

import './filter.scss';

const taglist = ["will", "intellect", "fantasy", "admired", "resolutions", "concentric circles", "hope", "desirable qualities", "virtues"];

export default class Filter extends Component {
	onTagDetail (tag){
		window.location.href = "/post-list?type=tag-filter&search=" + tag;
	}

	render () {
		return (
			<DefaultTemplate pageType="filter">
				<div className="page-container page-filter" align="left">
					<Gap hei="3" />
					<div className="content">
						<div className="tags">
							{
								taglist.map((tag, index) => (
									<div key={index} className="tag" onClick={this.onTagDetail.bind(this, tag)}>{tag}</div>
								))
							}
						</div>
					</div>
				</div>
			</DefaultTemplate>
		);
	}
}