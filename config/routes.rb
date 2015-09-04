Rails.application.routes.draw do
  root to: 'application#index'
  resources :posts, except: [:new, :edit] do
    get 'popular', on: :collection
    get 'recent', on: :collection
  end
end
