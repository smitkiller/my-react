import React from 'react';
import logo from '../logo.svg';
import _ from 'lodash';
import {Field} from 'redux-form';
import {TextField,Button} from '@material-ui/core';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const Page = ({pages,handleSubmit})=>{
	return(
		<div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">Display Data</h1>
	        </header>
	        <div>
	        	<form onSubmit={handleSubmit}>
	        		<div>
	        		<Field
	        			name="title"
	        			label="Title"
	        			component={renderTextField}
	        		/>
	        		</div>
	        		<div>
	        		<Field
	        			name="content"
	        			label="Content"
	        			component={renderTextField}
	        		/>
	        		</div>
	        		<div>
	        		<Button type="submit" variant="contained" color="primary">
					  Insert
					</Button>
	        		</div>
	        	</form>
	        </div>
	        <div className="display-data"> 
	        {
					
					_.map(pages,(page,key)=>(
							<div key={key}>
								<p><b>Title    :</b> {page.title}  <b>Content 	:</b> {page.content}</p>
							</div>
						)
					)
				}
			</div>   
      </div>
		)
}
export default Page;