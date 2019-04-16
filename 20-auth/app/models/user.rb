class User < ApplicationRecord

  has_secure_password

  # def password=(value)
  #   self.password_digest = BCrypt::Password.create(value)
  # end

  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end

end
