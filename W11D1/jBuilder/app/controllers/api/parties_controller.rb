class Api::PartiesController < ApplicationController
  def index
    @parties = Party.all.includes(:guests, guests: :gifts)
    render :index
  end

  def show
    @party = Party.includes(:guests, guests: :gifts).find_by(id: params[:id])
    render :show
  end
end
