import React, { Component, Fragment } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../components/header'

export default class HomeLayout extends Component {
	render(){
		return(
			<ReactFullpage
			    render={({ state, fullpageApi }) => {
			      return (
			        <ReactFullpage.Wrapper>
			          <div className="section">
			            <Header />
			          </div>
			          <div className="section">
			            <p>Section 2</p>
			          </div>
			        </ReactFullpage.Wrapper>
			      );
			    }}
			/>
		)
	}
}

