class User < ApplicationRecord

  # validation
  validates :username, presence: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :email, presence: true
  validates :password, length: { minimum: 6 }
  # auth methods
  attr_reader :password
  # asdf

  def self.gen_st
    SecureRandom::urlsafe_base64(16)
  end

  before_validation :ensure_session_token 

  def ensure_session_token
    # session[:session_token] ||= SecureRandom::urlsafe_base64(16)
    self.session_token ||= User.gen_st
  end

  def reset_session_token!
    self.session_token = User.gen_st
  end

  def is_password?(password)
    # convert password_digest to bcrypt object, then compare is_password on bcrypt method
    Bcrypt::Password.create(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
  end

  def self.find_by_credentials(usr, pswd)
    user = User.find_by(username: usr)
    user && user.is_password?(pswd) ? user : nil 
  end

end
