# == Schema Information
#
# Table name: postsubs
#
#  id         :integer          not null, primary key
#  sub_id     :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Postsub < ApplicationRecord

  validates :sub_id, :post_id, presence: true
  
  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :sub,
    foreign_key: :sub_id,
    class_name: :Sub 

 



end
