package com.mockupdd.web.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Component;

import com.mockupdd.model.User;
import com.mockupdd.services.MockupService;

@Path("/mockups")
@Component
public class MockupRESTService {

  @Autowired
  private MockupService mockupService;
  
  @GET
  @Path("/{mockupId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Response getMockupId(@Context SecurityContext context, @PathParam("mockupId") String mockupId) {
    User principal = (User) ((UsernamePasswordAuthenticationToken) context.getUserPrincipal()).getPrincipal();
    return Response.ok(mockupId).build();
  }

  
}
