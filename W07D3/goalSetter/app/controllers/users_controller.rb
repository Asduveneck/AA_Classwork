class UsersController < ApplicationController
  
  def new
    @user = User.new
    render :new
  end

  def show
     @current_user = User.find(params[:id])
    render :show
  end

  def create
    user = User.new(user_params)
    
    if user.save
      login!(user)
      user.id = current_user.id
      redirect_to user_url(user)
    else
      flash[:errors] = user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
