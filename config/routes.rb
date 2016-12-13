Rails.application.routes.draw do
  devise_for :users
  root "staticpage#index"
  namespace :admin do
    resources :admin
  end
end
