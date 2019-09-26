# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ApplicationRecord
  # for built in
  validates :username, presence: true, uniqueness: true 
  # validate # custom methods we define in the model
end
