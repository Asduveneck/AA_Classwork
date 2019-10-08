# == Schema Information
#
# Table name: subs
#
#  id          :integer          not null, primary key
#  title       :string
#  description :text
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Sub < ApplicationRecord
  
  validates :title, :description, :user_id, presence: true

  belongs_to :moderator,
    foreign_key: :user_id,
    class_name: :User 

    has_many :posts,
    foreign_key: :sub_id,
    class_name: :Post

    has_many :postsubs,
    foreign_key: :sub_id,
    class_name: :Postsub,
    inverse_of: :sub

    has_many :posts,
      through: :postsubs,
      source: :post

end
