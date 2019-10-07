Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create]
  resource :session
  resources :subs, except: [:destroy]
  resources :posts, except: [:index]
end

#     subs GET   /subs(.:format)          subs#index
#          POST  /subs(.:format)          subs#create
#  new_sub GET   /subs/new(.:format)      subs#new
# edit_sub GET   /subs/:id/edit(.:format) subs#edit
#      sub GET   /subs/:id(.:format)      subs#show
#          PATCH /subs/:id(.:format)      subs#update
#          PUT   /subs/:id(.:format)      subs#update

# get 'posts/create'
# get 'posts/new'
# get 'posts/edit'
# get 'posts/show'
# get 'posts/update'
# get 'posts/destroy'
# get 'subs/new'
# get 'subs/edit'
# get 'subs/show'
# get 'subs/index'
# get 'subs/update'
# get 'subs/create'
# get 'sessions/new'
# get 'sessions/create'
# get 'sessions/destroy'
# get 'users/new'
# get 'users/create'