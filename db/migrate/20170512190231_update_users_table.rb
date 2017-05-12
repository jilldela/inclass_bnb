class UpdateUsersTable < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :sessions_token, :session_token
  end
end
