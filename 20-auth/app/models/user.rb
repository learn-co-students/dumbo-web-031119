class User < ApplicationRecord

  has_secure_password
  validates_uniqueness_of :username
  has_many :votes

  def remaining_votes
    5 - self.votes.count
  end

  def can_vote?
    self.remaining_votes > 0
  end


  # def password=(value)
  #   self.password_digest = BCrypt::Password.create(value)
  # end

  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end

end
