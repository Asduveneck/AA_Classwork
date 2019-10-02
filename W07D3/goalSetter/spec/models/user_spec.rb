require 'rails_helper'

RSpec.describe User, type: :model do
  

  # Test our Validates
  # Test our Validate (custom methods)
  let(:incomplete_user) { User.new(username: '', password: 'password') }

  # gem shoulda-matchers
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:email) }
  it { should validate_length_of(:password).is_at_least(6) }

  # Start testing our authentication methods
end
  # Create the models and controllers needed for authentication and user creation. Do not write out your User model just yet - we are going to write this app TDD style!

  # Write model specs for User. Remember, model specs should test your model's validations, associations, and class scope methods (eg. User::find_by_credentials). Use shoulda-matchers to write tests for each of the validations in your user model. You won't have any associations written on your user model to begin with; go back and fill these in as you go. Refer to the reading on RSpec Model Testing as needed.

  # Next, write controller tests for each action in your UsersController. Refer to the RSpec Controller reading and last night's homework as needed. Refer to the rails testing docs to learn how to pass data in the controller tests.