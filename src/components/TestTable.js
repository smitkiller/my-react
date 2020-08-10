import React from 'react';
import MaterialTable from 'material-table';
import _ from 'lodash';

export default function MaterialTableDemo({pages,onInsert,onDelete,onUpdate}) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Title', field: 'title',validate: rowData => rowData.title === '' ? 'Required' : '', },
      { title: 'Content', field: 'content',validate: rowData => rowData.content === '' ? 'Required' : '',  },
    ],
    data: [],
  });

state.data=(_.map(pages,(page,key)=>({
    id:key,
    title:page.title,
    content:page.content
})))

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve,reject) => {
            setTimeout(() => {
              setState((prevState) => {
                const data = [...prevState.data];
                if(newData.title === undefined || newData.content === undefined){
                  reject();
                }else{
                  resolve();
                  onInsert(newData);
                   
                }
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve,reject) => {
            setTimeout(() => {
                setState((prevState) => {
                  const data = [...prevState.data];
                  if(newData.title === '' || newData.content === ''){
                    reject();
                  }else{
                    resolve();
                    onUpdate(newData);
                  }
                  return { ...prevState, data };
                });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                onDelete(oldData.id)
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
