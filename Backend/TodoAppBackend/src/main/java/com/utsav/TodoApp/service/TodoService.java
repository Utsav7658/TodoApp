package com.utsav.TodoApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utsav.TodoApp.exception.TodoExceptionHandler;
import com.utsav.TodoApp.model.Todos;
import com.utsav.TodoApp.repository.TodoRepository;

@Service
public class TodoService {

	@Autowired
	private TodoRepository repo;

	// Get All Todos
	public List<Todos> getAllTodos() {
		return repo.findAll();
	}

	//find Todo by ID
	public Todos findTodoById(String id) {
		Optional<Todos> todo = repo.findById(id);
		if(todo.isEmpty()) {
			throw new TodoExceptionHandler("Todo not found with the ID " + id);
		}
		return todo.get();
	}
	
	
	//Create Todo
	public void createTodo(Todos todo) {
		if(todo == null) {
			throw new TodoExceptionHandler("The todo is empty");
		}
		
		repo.save(todo);
	}
	
	public void deleteTodoById(String id) {
		Todos todo = findTodoById(id);
		repo.delete(todo);
		
	}

	public void updateTodoById(Todos oldTodo) {
		repo.save(oldTodo);
	}
	

}
