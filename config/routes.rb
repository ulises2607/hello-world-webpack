Rails.application.routes.draw do
  root 'root#index'
  get '/messages/random', to: 'messages#random'
end