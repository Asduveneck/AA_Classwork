# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 2}, allow_nil: true
  validates :username, :session_token, uniqueness: true

  has_many :subs,
    foreign_key: :user_id,
    class_name: :Sub
    # inverse_of: :moderator

    has_many :posts,
    foreign_key: :user_id,
    class_name: :Post

  def self.gen_st
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_cred(usrnm, pswrd)
    user = User.find_by(username: usrnm)
    user && user.is_pass?(pswrd) ? user : nil
  end

  def password=(pswrd)
    @password = pswrd 
    self.password_digest = BCrypt::Password.create(pswrd)
  end

  def is_pass?(pswrd)
    BCrypt::Password.new(self.password_digest).is_password?(pswrd)
  end

  def reset_st!
    self.session_token = User.gen_st 
    self.save!
    self.session_token 
  end 

  before_validation :ensure_session_token
  def ensure_session_token
    self.session_token ||= User.gen_st
  end

end
