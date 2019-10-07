class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    # @post.sub_id = params # we pass this in via our views params for multi sub posting
    if @post.save
      redirect_to post_url(@post)
    else
      flash[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def new
    @post = Post.new
  end

  def edit
    @post = Post.find(params[:id])
  end
  
  def show
    @post = Post.find(params[:id])
    render :show
  end
  
  def update
    @post = current_user.posts.find(params[:id])
    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash[:errors] =  @post.errors.full_messages
      render :edit
    end
  end

  def destroy 
    @post = current_user.posts.find(params[:id])
    if @post 
      @post.destroy 
      redirect_to subs_url # A post can belong to so many subs, might as well go back to every sub
    else 
      flash[:errors] = "No deleting other comments, unless you transfer me some $$"
    end
  end

  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [], :user_id)
  end

end
