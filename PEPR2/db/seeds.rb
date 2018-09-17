# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Student.destroy_all
Unit.destroy_all

@alex = Student.create(student_name: "Alex", age: 5, grade: "kindergarten")
@sara = Student.create(student_name: "sara", age: 5, grade: "kindergarten")
@mike = Student.create(student_name: "mike", age: 5, grade: "kindergarten")
@julie = Student.create(student_name: "julie", age: 5, grade: "kindergarten")


@alex.units.create(unit_name: "motormovement", run: true, gallop: false, hop: false, skip: false, jump: true)
@sara.units.create(unit_name: "motormovement", run: true, gallop: false, hop: false, skip: false, jump: true)
@mike.units.create(unit_name: "motormovement", run: true, gallop: false, hop: false, skip: false, jump: true)
@julie.units.create(unit_name: "motormovement", run: true, gallop: false, hop: false, skip: false, jump: true)

# Student.create!([
#   {student_name: "Alex", age: 5, grade: "kindergarten"},
#   {student_name: "Sara", age: 5, grade: "kindergarten"},
#   {student_name: "Mike", age: 5, grade: "kindergarten"},
#   {student_name: "Julie", age: 5, grade: "kindergarten"},
# ])

#   Unit.create!([
#     {unit_name: motormovement, run: true, gallop: false, hop: false, skip: false, jump: true, student_id: 1},
#     {unit_name: motormovement, run: true, gallop: false, hop: false, skip: false, jump: true, student_id: 2},
#     {unit_name: motormovement, run: true, gallop: false, hop: false, skip: false, jump: true, student_id: 3},
#     {unit_name: motormovement, run: true, gallop: false, hop: false, skip: false, jump: true, student_id: 4},
#   ])