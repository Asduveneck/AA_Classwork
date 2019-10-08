class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    usrnm = params[:user][:username]
    pswrd = params[:user][:password]
    @user = User.find_by_cred(usrnm, pswrd)
    if @user 
      login(@user)
      redirect_to subs_url
    else
      flash[:errors] = "Invalid Credentials. 5 seconds before your account is deactivated"
      render :new # start a new session
    end
  end

  def destroy # log out
    logout
    # our logout redirects for us
  end
end
