
Cat.destroy_all
Leg.destroy_all

bukas = Cat.create(name: "Bukas")
Cat.create(name: "Elliott")
Cat.create(name: "Jack")
Cat.create(name: "Ludvwig")


Leg.create(cat_id: bukas.id)
Leg.create(cat_id: bukas.id)
Leg.create(cat: bukas)
# leg = Leg.new
# leg.cat = bukas
# leg.save
bukas.legs << Leg.create



