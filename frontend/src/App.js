import React, { Component } from "react";
import logo from './logo.svg';
import $ from 'jquery'
import './App.css';

// 目前仅支持bootstrap3    npm install bootstrap@3 --save
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// function App() {
// 	//演示api
// 	if (true) {
// 		//全部todolist
// 		$.ajax({
// 			"type": 'GET',
// 			"url": "api/tasks",
// 			"success": (resbody) => {
// 				console.log(resbody)
// 			},
// 			"error": (err) => {
// 				console.log(err, err.status, err.responseText)
// 			}
// 		});
// 		//添加todoitem 1586658034.2166107
// 		/*  $.ajax(
// 		  {
// 			"type": 'POST',
// 			"url":"api/tasks",
// 			"data":JSON.stringify({"content":"newItem"}),
// 			"success":(resbody)=>{
// 			  console.log(resbody)
// 			},
// 			"error":(err)=>{
// 				console.log(err,err.status,err.responseText)
// 			}
// 		  }
// 	  ); */

// 		//删除todoitem url格式：api/tasks/id
// 		$.ajax({
// 			"type": 'DELETE',
// 			"url": "api/tasks/" + "1586658034.2166107",
// 			"success": (resbody) => {
// 				console.log(resbody)
// 			},
// 			"error": (err) => {
// 				console.log(err, err.status, err.responseText)
// 			}
// 		});

// 		//修改todoitem  
// 		$.ajax({
// 			"type": 'PUT',
// 			"url": "api/tasks/",
// 			"data": JSON.stringify({
// 				"content": "231232",
// 				"id": "1586486287.794215"
// 			}),
// 			"success": (resbody) => {
// 				console.log(resbody)
// 			},
// 			"error": (err) => {
// 				console.log(err, err.status, err.responseText)
// 			}
// 		});

// 	}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			list: []
		};
	}
	render() {
		return (
			<div class="container">
				<div class="row clearfix">
					<div class="col-md-12 column">
						<div class="jumbotron">
							<h1>
								Todo List <small>- 巩效义 宋徐威 郭开阔</small>
							</h1>
							<p>
								敏捷web开发大作业：<a href="https://github.com/ylongly7/XJTUSE_AgileWeb_FinalAssignment_ToDoList">Github</a>
							</p>
						</div>
						<div class="row clearfix">
							<div class="col-md-1 column">
							</div>
							<div class="col-md-4 column">
								<div class="input-group">
									<span class="input-group-addon"><strong>新 建:</strong></span>
									<input type="text" class="form-control" id='todo-input'
										value={this.state.inputValue}
										onChange={this.handleInputChange.bind(this)} placeholder=" Todo List..."></input>
								</div>
							</div>
							<div class="col-md-4 column">
								<button type="button" class="btn btn-success" id="submitBtn" onClick={this.handleBtnClick.bind(this)}>提 交</button>
							</div>
							<div class="col-md-3 column">
							</div>
						</div>
						<br></br>
						<hr></hr>
						<table class="table table-hover">
							<thead>
								<tr>
									<th>
									</th>
									<th>
										ID
									</th>
									<th>
										content
									</th>
									<th>
										time
									</th>
									<th>
										Delete
									</th>
									<th>
										Update
									</th>
								</tr>
							</thead>
							<tbody>
								{this.state.list.map((item, index) => {
									return (
										<tr>
											<td>
											</td>
											<td>
												{item.id}
											</td>
											<td>
												<input type="text"
													id={'content' + index} class="form-control" placeholder={item.content}
													onChange={this.updateTrigger.bind(this, index)}
												></input>
											</td>
											<td>
												{item.time}
											</td>
											<td>
												<button type="button" class="btn btn-danger" id={'delBtn' + index}
													onClick={this.handleItemDelete.bind(this, item.id)}><strong>删 除</strong></button>
											</td>
											<td>
												<button type="button" class="btn btn-primary" id={'updateBtn' + index} style={{ display: "none" }}
													onClick={this.handleItemUpdate.bind(this, item.id, index)}><strong>提 交</strong></button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div >
		);
	}

	//页面加载完成时getdata
	componentDidMount() {
		$.ajax({
			"type": 'GET',
			"url": "/api/tasks",
			"success": (resbody) => {
				console.log(resbody)
				this.setState({
					list: resbody
				});
			},
			"error": (err) => {
				console.log(err, err.status, err.responseText)
			}
		});
	}

	handleInputChange(e) {
		//改变数据，向input里面传入对象
		this.setState({
			inputValue: e.target.value
		});
	}

	//add
	handleBtnClick() {
		$.ajax(
			{
				"type": 'POST',
				"url": "api/tasks",
				"data": JSON.stringify({ "content": this.state.inputValue }),
				"success": (resbody) => {
					console.log(resbody)
					this.setState({
						list: resbody,
						inputValue: ""
					});
				},
				"error": (err) => {
					console.log(err, err.status, err.responseText)
				}
			}
		);
	}

	updateTrigger(index, id) {
		if ($('#content' + index).val() !== $('#content' + index).attr("placeholder")) {
			$('#updateBtn' + index).show();
		}
		// 检测有无修改
		else {
			$('#updateBtn' + index).hide();
		}
	}

	// Update
	handleItemUpdate(id, index) {
		console.log("put");
		$.ajax({
			"type": 'PUT',
			"url": "api/tasks/",
			"data": JSON.stringify({
				"content": $('#content' + index).val(),
				"id": id
			}),
			"success": (resbody) => {
				console.log(resbody)
				this.setState({
					list: resbody
				});
				$('#content' + index).val("");
				$('#updateBtn' + index).hide();
			},
			"error": (err) => {
				console.log(err, err.status, err.responseText)
			}
		});
	}

	//del
	handleItemDelete(id) {
		$.ajax({
			"type": 'DELETE',
			"url": "api/tasks/" + id,
			"success": (resbody) => {
				console.log(resbody)
				this.setState({
					list: resbody
				});
			},
			"error": (err) => {
				console.log(err, err.status, err.responseText)
			}
		});
	}
}
export default App;