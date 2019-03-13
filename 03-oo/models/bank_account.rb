class BankAccount 

  #class variable
  @@number_of_bank_accounts = 0

  # binding.pry

  attr_reader :balance, :potato
  # attr_writer :name
  attr_accessor :name

  def initialize(name, initial_balance)
    #instance variable name
    @name = name
    @potato = "🥔"
    @balance = initial_balance
    @@number_of_bank_accounts += 1
    # binding.pry
  end

  # def name
  #   # self #the instance
  #   # binding.pry
  #   @name
  # end

  # def balance
  #   @balance
  # end

  # def name=(new_name)
  #   @name = new_name
  # end

  #instance method
  def uppercase_name
    # self.name.upcase
    name.upcase #self is the implicit reciever
  end

  # binding.pry

  #class method
  def self.number_of_bank_accounts
    # binding.pry
    self #the class
    @@number_of_bank_accounts
  end


end
