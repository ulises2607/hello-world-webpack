class MessagesController < ApplicationController
  def random
    @message = Message.order("RANDOM()").first
    if @message.present?
      render json: { greeting: @message.greetings }
    else
      render json: { error: "No greetings found." }, status: :not_found
    end
  rescue => e
    render json: { error: e.message }, status: :internal_server_error
  end
end
