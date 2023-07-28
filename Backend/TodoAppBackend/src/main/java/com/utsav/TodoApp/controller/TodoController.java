package com.utsav.TodoApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.utsav.TodoApp.model.Todos;
import com.utsav.TodoApp.service.TodoService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class TodoController {

	@Autowired
	private TodoService todoService;

	@GetMapping("/test")
	public String testServer() {
		return "Todo App is functioning normally.";
	}

	@GetMapping("/todos")
	public ResponseEntity<List<Todos>> getAllTodos() {
		List<Todos> todos = todoService.getAllTodos();

		return new ResponseEntity<List<Todos>>(todos, HttpStatus.OK);

	}

	@GetMapping("/todos/{id}")
	public ResponseEntity<Todos> findTodoById(@PathVariable String id) {
		Todos todo = todoService.findTodoById(id);

		return new ResponseEntity<Todos>(todo, HttpStatus.OK);
	}
	
	@PostMapping("/todos")
	public ResponseEntity<String> createTodos(@Valid @RequestBody Todos todo){
		
		todoService.createTodo(todo);
		return new ResponseEntity<String>("Todo created Successfully", HttpStatus.OK);
	}
	
	@DeleteMapping("/todos/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		todoService.deleteTodoById(id);
		
		return new ResponseEntity<String>("Todo with ID " + id + " deleted successfully!", HttpStatus.OK);
	}
	
	@PutMapping("/todos/{id}")
	public ResponseEntity<String> updateTodoByID(@PathVariable String id, @RequestBody Todos newTodo){
		Todos oldTodo = findTodoById(id).getBody();		
		oldTodo.setDateCompletion(newTodo.getDateCompletion());
		oldTodo.setDescription(newTodo.getDescription());
		oldTodo.setDone(newTodo.isDone());
		todoService.updateTodoById(oldTodo);
		return new ResponseEntity<String>("Todo with ID " + id + " updated successfully!", HttpStatus.OK);
	}
	

}
