class RemoveUnitFromStudents < ActiveRecord::Migration[5.2]
  def change
    remove_column :students, :unit
  end
end
