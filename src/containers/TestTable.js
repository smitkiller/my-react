import React,{Component} from 'react';
import {TestTable} from '../components';
import {loadData,insertData,deleteData,updateData} from '../actions';
import {connect}  from 'react-redux';
import logo from '../logo.svg';

class TestTableCon extends Component{
	componentDidMount(){
		this.props.onLoad()
	}

	render(){
		const {pages} = this.props;
		return(
			<div className="App">
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1 className="App-title">Display Data</h1>
		        </header>
		        <div>
				{
					!pages || pages == ''
					?<div>Loading....</div>
					:<TestTable
						pages={pages}
						onInsert={this.props.onInsert}
						onDelete={this.props.onDelete}
						onUpdate={this.props.onUpdate}
					/>
				}
					
				</div>
			</div>
			)
	}
}

TestTableCon = connect(
	(state)=>({pages:state.pages}),
	{
		onLoad:loadData,
		onInsert:insertData,
		onDelete:deleteData,
		onUpdate:updateData
	}
	)(TestTableCon)
export default TestTableCon;