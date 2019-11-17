import React from 'react';
import logo from '../logo.svg';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const Page = ({pages})=>{
	return(
			<div className='App'>
			
			<Icon>account_balance</Icon>
			
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