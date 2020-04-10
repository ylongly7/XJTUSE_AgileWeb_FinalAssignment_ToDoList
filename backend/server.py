from flask import Flask, redirect, url_for, render_template, request, make_response,jsonify
import time
import json
app = Flask(__name__)
@app.route('/')
def index():
	return render_template('index.html')
	
FPATH = './data.json'
def get_file():
	with open(FPATH, 'r') as file:
		data = json.loads(file.read())
	return data

def set_file(data):
	print(data)
	with open(FPATH, 'w') as file:
		file.write(json.dumps(data))
	
@app.route('/api/tasks/', methods=['GET'], strict_slashes=False)
def query_all():
	data = get_file()
	return jsonify(data), 200
#task 对象的字段有：content,id,time,前端只需传来content
@app.route('/api/tasks/', methods=['POST'], strict_slashes=False)
def insert():
	# 创建一个新的Todo任务
	new_data = str(request.get_data(), encoding='utf-8')
	try:
		new_data = json.loads(new_data)
		ti = time.time()
		date = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
		new_data['id']=str(ti)
		new_data['time']=str(date)
	
	except:
		return 'param  error', 403
	file = get_file()
	file.append(new_data)
	set_file(file)
	return "OK", 200

@app.route('/api/tasks/<id>', methods=['DELETE'], strict_slashes=False)
def delete_by_id(id=None):
	file = get_file()
	for item in file:
		if id == item['id']:
			file.remove(item)
			set_file(file)
			return 'OK', 200
	return 'id不存在：id=%s ' % (id), 404
	
@app.route('/api/tasks/<id>', methods=['GET'], strict_slashes=False)
def query_by_id(id=None):
	# 返回一个指定ID的Todo任务
	file = get_file()
	for item in file:
		if id == item['id']:
			return jsonify(item), 200
	return 'id不存在：id=%s' % (id), 404
	
@app.route('/api/tasks/', methods=['PUT'], strict_slashes=False)
def change( ):
	# 修改content
	new_data = str(request.get_data(), encoding='utf-8')
	try:
		new_data = json.loads(new_data)
	except:
		return 'param  error', 403
	file = get_file()
	for item in file:
		if new_data['id'] == item['id']:
			item['content'] = new_data['content']
			set_file(file)
			return "OK", 200
	return 'id不存在：id=%s' % (id), 404
	
if __name__ == '__main__':
	# 将debug = True可在debug模式中自动重启服务
	app.debug = True
	app.run(host='localhost', port=5001)