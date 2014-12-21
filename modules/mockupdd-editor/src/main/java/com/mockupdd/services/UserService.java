package com.mockupdd.services;

import org.springframework.transaction.annotation.Transactional;

import com.mockupdd.model.User;
import com.mockupdd.repositories.UserRepository;

@Transactional
public class UserService {

	private UserRepository userRepository;
	
	public UserService(UserRepository userRepository){
		this.userRepository = userRepository;
	}
	
	public User createNewUser(){
		User user = new User();
		this.userRepository.add(user);
		return user;
	}

	public User getUserById(long userId) {
		return this.userRepository.get(userId);
	}
	
}
