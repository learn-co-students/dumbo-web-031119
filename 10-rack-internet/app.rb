require 'pry'

class App

  def call(environment_hash)

    status_code = 418
    header = { "Content-type" =>  "text/html" }

    binding.pry
    if environment_hash["REQUEST_PATH"] == "/teapot"
      body = ["I'm a little teapot"]
    else
      body = ["Hello world"]
    end

    return [status_code, header, body]
  end

end
