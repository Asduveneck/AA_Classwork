class ShortenedUrl < ApplicationRecord
  def self.random_code(str, n = 8)
    while blah = false
      blah = true
      short = SecureRandom::urlsafe_base64(str, n)
      if ShortenedUrl.exists?(:short_url => short)
        blah = false
      end
    end
    return short
  end


end