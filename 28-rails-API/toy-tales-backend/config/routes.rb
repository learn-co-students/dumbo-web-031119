Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get "/toys", to: "toys#index"
  # INDEX, SHOW, UPDATE, CREATE, NEW, DESTROY, EDIT
  get "/toys/random", to: "toys#random"
  resources :toys, only: [:index, :show, :create, :update]

end
