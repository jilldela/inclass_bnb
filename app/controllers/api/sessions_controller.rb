class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render json: ["You made it!"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["you aint right"], status: 404
    end
  end
end
