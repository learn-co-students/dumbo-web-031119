class Tweet

  attr_reader :user, :text

  # @all = []
  TWEETS = []

  def initialize(text, user)
    @text = text
    @user = user
    # binding.pry
    TWEETS << self
  end

  def self.all
    TWEETS
  end

  def self.just_the_tweet_text
    # self.all.map do |tweet|
    #   tweet.text
    # end
    self.all.map(&:text)
  end

  def username
    self.user.username
  end

end