import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import _ from 'lodash';

const Page = ({pages})=>{
	return(
			<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo'/>
			</header>
			<p>Display Data </p>
				{
					_.map(pages,(page,key)=>(
										<div key={key}>
											<p>Name      	: {page.title}</p>
											<p>LastName 	: {page.content}</p>
										</div>
									)
								)
				}

			</div>
		)
}
export default Page;