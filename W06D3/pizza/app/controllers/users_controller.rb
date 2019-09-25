# app/controllers/users_controller.rb
class UsersController < ApplicationController
  def index 
    # render plain: "I'm in the index action!"
    render json: params
  end 

  def create 
    # user = User.new(params.require(:user).permit(:user_attributes_here))
    # replace the `user_attributes_here` with the actual attribute keys
    user = User.new(params.require(:user).permit(:pizza))
    user.save!
    render json: user
  end

  def show 
    render json: params
  end
end

# in postman pasted in

# http://localhost:3000/users/?favorite_food=pizza
# ?worst_food=cabbage&smelliest_food=durian&bleh[fruit]=rotten_figs