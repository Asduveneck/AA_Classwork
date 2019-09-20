class User < ApplicationRecord

  # Validation
  validates :name, presence: true

  # Associations:

  # belongs_to :enrolled_courses,
  #   primary_key: :id, 
  #   foreign_key: :SOMETHING!, # THROUGH SOMETHING?!?
  #   class_name: :Course


    # From Enrollment
    has_many :enrollments,
    primary_key: :id,  
    foreign_key: :student_id,
    class_name: :Enrollment

    has_many :courses,
      primary_key: :id,
      foreign_key: :name,
      class_name: :User

end
