
let users = [
  { id: 1, username: 'John', password: '111'},
  { id: 2, username: 'Edward', password: '222'}
];

class User {
  constructor() {

  }

  static login(username, password) {
    return users.find(u => u.username === username && u.password === password);
  }

}

module.exports = User;