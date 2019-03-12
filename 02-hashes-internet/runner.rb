require 'colorize'
require 'httparty'
require 'pry'


def introduce
  puts "Welcome to the book 📖 searcher!".yellow
  puts "What would you like to search for?".magenta
end

def get_google_books_results(search_term)
  query_stringified_search_term = search_term.split.join("+")
  url = "https://www.googleapis.com/books/v1/volumes?q=#{ query_stringified_search_term }"
  HTTParty.get(url)
end

def process_google_hash(books_array)
  books_array.map do |book_hash|
    {
      title: book_hash["volumeInfo"]["title"],
      authors: book_hash["volumeInfo"]["authors"]
    }
  end
end

def display_results(results)
  puts "Search results:".green

  results.each do |book_result|
    puts book_result[:title].blue
    puts book_result[:authors].join(", ")
    puts ""
  end
end

def run
  introduce
  array_of_book_hashes_from_google = get_google_books_results(gets.chomp)["items"]
  
  book_info_array = process_google_hash(array_of_book_hashes_from_google)

  display_results(book_info_array)
end


run

# binding.pry

# 0