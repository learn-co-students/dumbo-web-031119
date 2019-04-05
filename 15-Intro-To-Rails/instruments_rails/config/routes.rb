Rails.application.routes.draw do
  resources :instruments, only: [:index]
  # get "/instruments", to: "instruments#index"
  get "/instruments/:id", to: "instruments#show", as: "instrument"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
