class CreateUnits < ActiveRecord::Migration[5.2]
  def change
    create_table :units do |t|
      t.string   :unit_name
      t.boolean  :run
      t.boolean  :gallop
      t.boolean  :hop
      t.boolean  :skip
      t.boolean  :jump
      t.string   :student_id 
      t.timestamps
    end
  end
end
