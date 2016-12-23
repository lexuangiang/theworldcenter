Rails.application.routes.draw do
  resources :places
  devise_for :users
  root "staticpage#index"
  get "contact" => "staticpage#contact"
  namespace :admin do
    resources :admin
  end
end
