class Enrollment < ApplicationRecord
  # validation: 
  validates :course_id, :student_id, presence: true

  # Associations
  # belongs_to

  belongs_to :enrolled_courses,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :User

  belongs_to :user,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :User
  
  belongs_to :course,
    primary_key: :id,
    foreign_key: :course_id,
    class_name: :Course

    
    # has_many
  has_many :users,
    primary_key: :id,
    foreign_key: :name,
    class_name: :User
  

end
