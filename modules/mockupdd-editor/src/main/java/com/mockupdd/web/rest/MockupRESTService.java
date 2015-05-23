package com.mockupdd.web.rest;

import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Component;

import com.mockupdd.model.Mockup;
import com.mockupdd.model.User;
import com.mockupdd.services.MockupService;
import com.mockupdd.web.rest.util.APIResponse;

@Path("/mockups")
@Component
public class MockupRESTService {

  private MockupService mockupService;

  public MockupRESTService(MockupService mockupService){
    this.mockupService = mockupService;
  }
  
  @GET
  @Path("/{mockupId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Response getMockupId(@Context SecurityContext context, @PathParam("mockupId") String mockupId) {
    User principal = (User) ((UsernamePasswordAuthenticationToken) context.getUserPrincipal()).getPrincipal();
    return Response.ok(mockupId).build();
  }
  
  @PUT
  @Path("/{mockupId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Response updateMockup(@PathParam("mockupId") Long mockupId, Mockup mockup){
    //Validate json
    try {
      JSONObject json = new JSONObject(mockup.getJsonData());
    } catch (JSONException e) {
      return APIResponse.userError();
    }
	  this.mockupService.update(mockupId, mockup);
	  return APIResponse.ok();
  }

  
}
