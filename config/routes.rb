Rails.application.routes.draw do
  resources :users
  resources :characters, only: [:index, :show, :update, :create, :destroy]
  resources :roles, only: [:index, :show]
  resources :groups, only: [:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
