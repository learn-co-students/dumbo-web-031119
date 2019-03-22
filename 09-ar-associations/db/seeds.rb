
Escape.destroy_all
Animal.destroy_all
Zoo.destroy_all


dumbo = Animal.create(name: "Dumbo")
clifford = Animal.create(name: "Clifford")
Animal.create(name: "Willie")
Animal.create(name: "Harambe")

bronx = Zoo.create(name: "Bronx Zoo")
prosp = Zoo.create(name: "Prospect Park Zoo")
Zoo.create(name: "Brookfield Zoo")
Zoo.create(name: "Lincoln Park Zoo")
Zoo.create(name: "San Diego Zoo")


Escape.create(animal_id: clifford.id,  zoo_id: Zoo.find_by(name: "Brookfield Zoo").id)
Escape.create(animal: dumbo, zoo: bronx)
Escape.create(animal: dumbo, zoo: prosp)

