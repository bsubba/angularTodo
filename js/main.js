(function(){
    
    'user strict';
    angular
    .module('todoApp', [])
    .controller('todoCtrl', todoCtrl);

    
    function todoCtrl(){
        var vm = this;
        vm.todos = [];
        vm.addTodo = addTodo;
        vm.loadTodo = loadTodo;
		vm.editTodo = editTodo;
		vm.removeTodo = removeTodo;
		
		function loadTodo(){
			if(localStorage.todo){
				vm.todos = JSON.parse(localStorage.todo);
			}
		}
		
        function addTodo(){
            var todo = vm.todo_txt;
            vm.todos.push(todo);
			vm.todo_txt = " ";
			localStorage.todo = JSON.stringify(vm.todos);
			console.log(vm.todos);
            
        }
		
		function editTodo($index){
			var newItem = document.getElementsByClassName('item')[$index].innerHTML;
			vm.todos[$index] = newItem;
			localStorage.todo = JSON.stringify(vm.todos);
		}
		
		function removeTodo($index){
			vm.todos.splice($index, 1);
			localStorage.todo = JSON.stringify(vm.todos);
		}
        
    }
})();
