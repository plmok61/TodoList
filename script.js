var todoList = {
  todos: [],
  displayTodos: function() {
  	if (this.todos.length === 0) {
  		console.log("The list is empty!");
  	} else {
  		console.log('My todos:');
  		for (var i = 0; i < this.todos.length; i ++) {
  			if (this.todos[i].completed === false) {
  			console.log("( )", this.todos[i].todoText);
  		} else if (this.todos[i].completed === true) {
  			console.log("(x)", this.todos[i].todoText);
  		}
  	  }
  	}
  },
  addTodo: function(todoText) {
  	this.todos.push({
  		todoText: todoText,
  		completed: false
  	});
  	this.displayTodos();
  },
  changeTodo: function(position, newText) {
  	this.todos[position].todoText = newText;
  	this.displayTodos();
  },
  deleteTodo: function(position) {
  	this.todos.splice(position, 1);
  	this.displayTodos();
  },
  toggleCompleted: function(position) {
  	var todo = this.todos[position];
  	todo.completed = !todo.completed;
  	this.displayTodos();
  },
  toggleAll: function() {
  	var totalTodos = this.todos.length;
  	var completedTodos = 0;
  	for (var i = 0; i < totalTodos; i++) {
  		if (this.todos[i].completed === true) {
  			completedTodos++;
  		}
  	}
  	if (completedTodos === totalTodos) {
  		for ( i = 0; i < totalTodos; i++) {
			this.todos[i].completed = false;
  		}
  	} else if (completedTodos < totalTodos) {
  		for ( i = 0; i < totalTodos; i++) {
  			this.todos[i].completed = true;
  		}
  	}
  	if (completedTodos === 0) {
  		for ( i = 0; i < totalTodos; i++) {
  			this.todos[i].completed = true;
  		}
  	}
  	this.displayTodos();
  }
};


var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodo = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput = '';
  },
  deleteTodo: function() {
    var deletePositionInput = document.getElementById('deletePositionInput');
    todoList.deleteTodo(deletePositionInput.valueAsNumber);
    deletePositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput.value = '';
  }
};
