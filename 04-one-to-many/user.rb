class User

  attr_accessor :username

  # attr_reader :tweets

  def initialize(username)
    @username = username
    @account_created = Time.now
    # @tweets = []
  end

  def post_tweet(message)
    # binding.pry
    Tweet.new(message, self)
    # @tweets << new_tweet
    # new_tweet
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  # def remove_tweet(tweet)
  #   @tweets = @tweets - [ tweet ]
  # end

end