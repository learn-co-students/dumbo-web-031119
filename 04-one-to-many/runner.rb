require 'pry'
require_relative 'user'
require_relative 'tweet'

coffee_dad = User.new("coffee_dad")
ariana = User.new("ariana.grande")

# Tweet.new("Having coffee", coffee_dad)
# Tweet.new("Drinking coffee", coffee_dad)
# Tweet.new("The soul of the universe is dying.", coffee_dad)
# Tweet.new("Getting coffee", coffee_dad)

ariana.post_tweet("7 rings")
ariana.post_tweet("thank u, next")

tweet_1 = coffee_dad.post_tweet("Having coffee")
tweet_2 = coffee_dad.post_tweet("Drinking coffee")
tweet_3 = coffee_dad.post_tweet("The soul of the universe is dying.")
tweet_4 = coffee_dad.post_tweet("Getting coffee")

# coffee_dad.remove_tweet(tweet_2)


binding.pry

false

