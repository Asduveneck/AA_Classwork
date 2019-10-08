class ApplicationController < ActionController::Base
#CRLLL
helper_method :current_user, :logged_in?
def current_user
  return nil unless session[:session_token]
  @current_user = User.find_by(session_token: session[:session_token])
end

def require_login
  redirect_to new_session_url unless logged_in?
end

def logged_in? 
  !!current_user 
end

def login(user)
  @current_user = user
  session[:session_token] = user.reset_st!
end

def logout
  current_user.reset_st!
  session[:session_token] = nil
  redirect_to new_session_url
end


end
