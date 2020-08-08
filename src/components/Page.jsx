import React from 'react';
import logo from '../logo.svg';
import _ from 'lodash';
import {Field} from 'redux-form';
import {TextField,Button} from '@material-ui/core';
import DeleteDialog from '../dialog/deleteDialog';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Edit} from '../containers';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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

const required = value => (value ? undefined : 'Required')

const Page = ({pages,handleSubmit,onDelete})=>{
	const classes = useStyles();
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
	        			component={renderTextField}
	        			label="Title"
                validate={required}
	        			/>
	        		</div>
	        		<div>
	        		<Field
	        			name="content"
	        			component={renderTextField}
	        			label="Content"
                validate={required}
	        			/>
	        		</div>
	        		<div>
	        			<Button type="submit" variant="contained" color="primary">
						  เพิ่ม
						</Button>
					</div>
	        	</form>
	        </div>

	  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Content</TableCell>
            <TableCell width="100"></TableCell>
            <TableCell width="100"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(pages,(page,key)=>(
            <TableRow key={key}>
              <TableCell>{page.title}</TableCell>
              <TableCell>{page.content}</TableCell>
              <TableCell><DeleteDialog id={key} onDelete={onDelete}/></TableCell>
              <TableCell><Edit id={key}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
      </div>
		)
}
export default Page;