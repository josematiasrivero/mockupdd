package com.mockupdd.security.social;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.social.connect.Connection;
import org.springframework.social.connect.web.SignInAdapter;
import org.springframework.web.context.request.NativeWebRequest;

import com.mockupdd.model.User;
import com.mockupdd.services.UserService;

public class SignInAdapterImpl implements SignInAdapter {

	private UserService userService;
	
	public SignInAdapterImpl(UserService userService){
		this.userService = userService;
	}
	
	@Override
	public String signIn(String userId, Connection<?> connection, NativeWebRequest request) {
		User user = this.userService.getUserById(Long.parseLong(userId));
		SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(user,connection, user.getAuthorities()));
		return "/projects/";
	}
	
}
