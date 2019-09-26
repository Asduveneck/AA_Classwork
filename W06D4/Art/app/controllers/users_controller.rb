class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        users = User.new(user_params)
        if user.save
            render json: user
        else
            render json: "This user has already been made"
        end
    end

    def show
        render json: User.find(params[:id])
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    def update
        user = User.find(params[:id])
         if user.update(user_params)
            render json: user
        else
            render json: "This update is invalid"
        end
    end

    def user_params
        params.require(:user).permit(:username)
    end
end
