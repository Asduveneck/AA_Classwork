class SubsController < ApplicationController

  before_action :req_mod_login, only:[:edit, :update]

  def req_mod_login
    # Redirecting to stay consistent with other require_login method.
    # Redirect back to the sub they were on if they try to edit something they don't have access to
    render :show unless current_user.id == self.user_id 
  end

  def new 
    @sub = Sub.new
  end

  def edit
    @sub = Sub.find(params[:id]) # assuming routed this way based on current routes
  end

  def show
    @sub = Sub.find(params[:id])
  end

  def index
    @subs = Sub.all
  end

  def update
    @sub = Sub.find(params[:id])
    @sub.update(sub_params) # receive from views
    flash[:errors] = @sub.errors.full_messages
    redirect_to sub_url(@sub)
  end

  def create  # nested new or create? NO. 
    @sub = Sub.new(sub_params) 
    @sub.user_id = current_user.id
    if @sub.save 
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors.full_messages #, status: 418 # I forgot how to do these
      render :new
    end
  end

  def sub_params
    params.require(:sub).permit(:title, :description, :user_id)
  end
end
