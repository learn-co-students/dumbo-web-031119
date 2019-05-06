dario = Teacher.create(name: "Dario", subject: "Math")
calculus = Classroom.create(teacher_id: dario.id, name: "Calculus")
Assignment.create(name: "Intermediate Value Theorem", classroom_id: calculus.id)
Assignment.create(name: "Pythagorean Theorem", classroom_id: calculus.id)

trig = Classroom.create(teacher: dario, name: "Trig")
Assignment.create(name: "SOHCAHTOA", classroom_id: trig.id)


danny = Teacher.create(name: "Danny", subject: "Physical Education")
ballroom = Classroom.create(teacher_id: danny.id, name: "Ballroom Dancing")
Assignment.create(name: "Macarena", classroom_id: ballroom.id)
Assignment.create(name: "Dougie", classroom_id: ballroom.id)
