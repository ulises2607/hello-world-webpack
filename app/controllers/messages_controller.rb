class MessagesController < ApplicationController
    def random
      @message = Message.order("RANDOM()").first
      render json: { greeting: @message.greetings }
    end
  end