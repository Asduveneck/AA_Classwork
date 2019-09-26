class AddUsernameToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column(:users, :username, :string, null: false)
  end
end
# https://apidock.com/rails/ActiveRecord/ConnectionAdapters/SchemaStatements/add_column