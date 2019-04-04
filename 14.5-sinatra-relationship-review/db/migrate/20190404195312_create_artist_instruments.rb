class CreateArtistInstruments < ActiveRecord::Migration
  def change
    create_table :artist_instruments do |t|
      t.integer :instrument_id
      t.references :artist, foreign_key: true
    end
  end
end
