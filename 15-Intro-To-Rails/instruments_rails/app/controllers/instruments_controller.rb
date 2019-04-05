class InstrumentsController < ApplicationController

  def index
    @instruments = Instrument.all
    render :index
  end

  def show
    @instrument = Instrument.find(params[:id])
    # render :show
  end

end
