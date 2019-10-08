# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string
#  url        :string
#  content    :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :url, :content, :user_id, presence: true 

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User 

    has_many :postsubs,
      foreign_key: :post_id,
      class_name: :Postsub,
      inverse_of: :post

    has_many :subs, # so naming convention will let us 
      through: :postsubs,
      source: :sub

    
end
