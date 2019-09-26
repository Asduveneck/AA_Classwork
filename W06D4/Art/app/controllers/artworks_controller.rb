class ArtworksController < ApplicationController

    def index
        # Bryan did:
        user = User.find(params[:user_id])
        @artworks = user.artworks + user.shared_artworks
        render json: @artworks.uniq
        # This works really well. However, this should have 
        # been done in the model, not the controller... 

        # debugger
        # artworks = Artwork.art_for_user(params[:user_id])
        # @artworks += #sharedartworks
        # check artist id 
        # shared with user...? check the artwork_Shares includes? 

        # if we receive arti
        # render json: artworks
    end

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: 422
        end
    end

    def show
        render json: Artwork.find(params[:id])
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy
        render json: artwork
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork.update(artwork_params)
            render json: artwork
        else
            render json: "This update is invalid"
        end
    end

  private

    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end
