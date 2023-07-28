package com.utsav.TodoApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.utsav.TodoApp.model.Todos;

@Repository
public interface TodoRepository extends JpaRepository<Todos, String>{

}
