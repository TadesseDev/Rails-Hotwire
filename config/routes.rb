Rails.application.routes.draw do
  devise_for :users
  resources :posts
  root to: "posts#index"
  resources :tweets
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
