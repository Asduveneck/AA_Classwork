class Course < ApplicationRecord

  belongs_to :user,
    primary_key: :id,
    foreign_key: :name,
    class_name: :User

  has_many :enrollments,
    primary_key: :id,  
    foreign_key: :course_id,
    class_name: :Enrollment 

  has_many :users,
    through: :courses,
    source: :Enrollment
  
end
