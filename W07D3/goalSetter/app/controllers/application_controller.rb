class ApplicationController < ActionController::Base
  helper_method :current_user
  
  def current_user
    # @current_user ||= SecureRandom::urlsafe_base64(16)
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!

    session[:session_token] = nil
    redirect_to "user#new"
  end
  
end
