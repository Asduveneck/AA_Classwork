Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :destroy, :index, :show, :update] do # update does patch and puts
    resources :artworks, only: [:index]
  end
  resources :artworks, only: [:create, :destroy, :show, :update] # later
  resources :artwork_shares, only: [:create, :destroy] # later
  # resources :artwork_shares
  # resources :users, only: [:index] do # update does patch and puts  
  #   resources :artworks, only: [:index] # later
  # end
end
