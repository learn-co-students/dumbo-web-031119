Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :colors, only: [:index] do
    resources :votes, only: [:create]
  end

  resources :votes, only: [:index, :destroy]

  resources :users, only: [:new, :create]
  resources :login, only: [:new, :create]
  delete "login", to: "login#destroy", as: "logout"

  root "colors#index"
end
