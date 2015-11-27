package com.mockupdd.web.rest;

import com.mockupdd.model.AnnotationTemplate;
import com.mockupdd.services.AnnotationTemplateService;
import com.mockupdd.web.controllers.BaseController;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Component
@Path("/annotationTemplates")
public class AnnotationTemplateRESTService extends BaseController {

  private AnnotationTemplateService service;

  public AnnotationTemplateRESTService(AnnotationTemplateService service) {
    this.service = service;
  }

  @GET
  @Path("/{id}")
  @Produces(MediaType.APPLICATION_JSON)
  public Response get(@PathParam("id") Long id) {
    AnnotationTemplate annotationTemplate = service.get(id);
    return Response.ok(annotationTemplate).build();
  }

  @GET
  @Path("/")
  @Produces(MediaType.APPLICATION_JSON)
  public Response getAll() {
    return Response.ok(service.getAll()).build();
  }
  
  @POST
  @Path("/{name}/{content}")
  @Produces(MediaType.APPLICATION_JSON)
  public Response save(@PathParam("name") String name, @PathParam("content") String content) {
    return Response.ok(service.create(name, content)).build();
  }
}
