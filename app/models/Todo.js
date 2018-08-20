

export default class Todo {
  constructor(data) {
this.id = data._id
this.completed = data.completed
this.user = data.user
this.message = data.message,
this.description = data.description
  }
}
