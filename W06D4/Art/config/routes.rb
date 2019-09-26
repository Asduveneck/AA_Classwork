Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :destroy, :index, :show, :update] # update does patch and puts
  # resources :artworks # , except: [] # later
  # resources :artwork_shares
end
