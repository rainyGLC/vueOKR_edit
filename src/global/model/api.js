export default {
  login: 'http://localhost:3000/api/login',
  okr: 'http://localhost:3000/api/okr',
  todos:'http://localhost:3000/api/todos',
  todosId: (id) => 'http://localhost:3000/api/todos/' + id,
  todokrId:(id) => 'http://localhost:3000/api/todo-kr/' + id,
  okrId:(id)=> 'http://localhost:3000/api/okr/' + id
}
