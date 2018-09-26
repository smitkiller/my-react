import React from 'react';
import '../App.css';
import logo from '../logo.svg';

const Page = ({pages})=>{
	return(
			<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo'/>
			</header>
			<p>Display Data </p>
				{
					pages.map((page,key)=>(
										<div key={key}>
											<p>ID			: {page.id}</p>
											<p>Name      	: {page.name}</p>
											<p>LastName 	: {page.lastname}</p>
										</div>
									)
								)
				}

			</div>
		)
}
export default Page;