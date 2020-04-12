import React from 'react';
import logo from './logo.svg';
import $ from 'jquery'
import './App.css';

function App() {
	//演示api
	if (true){
	//全部todolist
	   $.ajax(
		  {
			"type": 'GET',
			"url":"api/tasks",
			"success":(resbody)=>{
			  console.log(resbody)
			},
			"error":(err)=>{
				console.log(err,err.status,err.responseText)
			}
		  }
	  ); 
	 //添加todoitem 1586658034.2166107
	 /*  $.ajax(
		  {
			"type": 'POST',
			"url":"api/tasks",
			"data":JSON.stringify({"content":"newItem"}),
			"success":(resbody)=>{
			  console.log(resbody)
			},
			"error":(err)=>{
				console.log(err,err.status,err.responseText)
			}
		  }
	  ); */
	  
	  //删除todoitem url格式：api/tasks/id
	  $.ajax(
		  {
			"type": 'DELETE',
			"url":"api/tasks/"+"1586658034.2166107",			 
			"success":(resbody)=>{
			  console.log(resbody)
			},
			"error":(err)=>{
				console.log(err,err.status,err.responseText)
			}
		  }
	  );
	  
	  //修改todoitem  
	  $.ajax(
		  {
			"type": 'PUT',
			"url":"api/tasks/" ,
			"data":JSON.stringify({"content":"231232", "id":"1586486287.794215"}),
			"success":(resbody)=>{
			  console.log(resbody)
			},
			"error":(err)=>{
				console.log(err,err.status,err.responseText)
			}
		  }
	  );
	  
	}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
