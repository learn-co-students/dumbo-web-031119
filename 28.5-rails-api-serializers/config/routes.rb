Rails.application.routes.draw do
  resources :assignments
  resources :classrooms, only: [:show]
  resources :teachers, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
