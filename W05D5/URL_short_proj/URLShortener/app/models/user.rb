class User < ApplicationRecord
  # Validation
  validates :email, presence: true
  # uniqueness, presence. 
end