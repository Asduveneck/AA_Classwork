require 'rack'

# Warm Up:

# Rack::Server.start(
#   app: Proc.new do |env|
#     ['200', 
#      {'Content-Type' => 'text/html'},
#      ['hello world']
#     ]
#   end
# )

# Doesn't actually work because this by default gets put on a TCP request.
# This just tells the web server what to do, but doesn't do anything else

# Seems like we have to specify the Port 

# Rack::Server.start(
#   app: Proc.new do |env|
#     ['200', 
#      {'Content-Type' => 'text/html'},
#      ['hello world']
#     ]
#   end,
#   Port: 3000 # convention for localhost3000
# )





# A slight upgrade:
# more modular and returns 'Hello world!'

# # Part 1
#   app = Proc.new do |env|
#     # Rack methods useful for us
#     req = Rack::Request.new(env)
#     res = Rack::Response.new
#     # Following tells browser what server has given in response
#     res['Content-Type'] = 'text/html'
#     # To put things in body:
#     res.write("Hello world!")
#     res.finish 
#   end 

# # Part 2 to get the server running

#   Rack::Server.start(
#     app: app,
#     Port: 3000
#   )

# Phase 1: Response Request to get a response from the browser and display it.

# Seems like we just need to literally take our request body and pass it into our response's 'write'

  app = Proc.new do |env|
    # Rack methods useful for us
    req = Rack::Request.new(env)
    res = Rack::Response.new
    # Following tells browser what server has given in response
    res['Content-Type'] = 'text/html'
    # To put things in body:
    res.write(req.path) # https://www.rubydoc.info/gems/rack/Rack/Request/Helpers#path-instance_method
    res.finish 
  end 

  Rack::Server.start(
    app: app,
    Port: 3000
  )

  # http://localhost:3000/pop/s?dig=%22pop%22/ # doesn't include the search param


