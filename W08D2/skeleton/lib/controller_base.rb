require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'byebug'
class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req 
    @res = res
    @already_built_response = false
  end

  # Helper method to alias @already_built_response
  def already_built_response? # just a getter. ? because bool, and also because we're getting it...
    @already_built_response 
  end

  # Set the response status code and header
  def redirect_to(url) 
    # Set the location field
    res.location = url # https://www.rubydoc.info/gems/rack/Rack/Response/Helpers#location-instance_method
    # Status Code 302 ... 
    res.status = 302 # sets status
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    # set the content+type and body:
    raise 'Double Render Error' if @already_built_response == true  
    
    #@content_type = content_type # no because our res is of class Rack. To access/modify one of its parameters, content, we invoke the `write` method...
    @res.write(content)
    @res['Content-Type'] = content_type # in this response instance, have this key of content type = what was passed  in... already a string
  
    @already_built_response = true # because now we've built the response...
    debugger
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
  end

  # method exposing a `Session` object
  def session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end
