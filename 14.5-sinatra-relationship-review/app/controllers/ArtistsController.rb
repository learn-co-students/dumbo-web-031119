class ArtistsController < ApplicationController

  get "/artists" do
    @artists = Artist.all
    erb :'artists/index'
  end

  get "/artists/new" do
    @artist = Artist.new
    @instruments = Instrument.all
    erb :'artists/new'
  end

  get "/artists/:id" do
    @artist = Artist.find(params[:id])
    erb :'artists/show'
  end

  get "/artists/:id/edit" do
    @instruments = Instrument.all
    @artist = Artist.find(params[:id])
    erb :'artists/edit'
  end

  patch "/artists/:id" do
    # binding.pry
    @artist = Artist.find(params[:id])
    @artist.update(params[:artist])
    @artist.instrument_ids = params[:instruments]
    @artist.save
    # ArtistInstrument.create(artist: @artist, instrument_id: params[:instrument][:id])
    redirect to "/artists/#{@artist.id}"
  end

  post "/artists" do
    @artist = Artist.create(params[:artist])
    @artist.instrument_ids = params[:instruments]
    @artist.save
    redirect to "/artists/#{@artist.id}"
  end

  delete "/artists/:id" do
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect to "/artists"
  end

end
