class CommentsController < ApplicationController
  def index
        comments = Comment.all
        render json: comments
    end

    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment
        else
            # render json: "This comment has already been made"
            render json: comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        render json: comment
    end

    private 

    def comment_params
        params.require(:comment).permit(:author_id, :artwork_id, :body)
    end
end
