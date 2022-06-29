class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :image
      t.string :overview
      t.integer :group_id
      t.integer :role_id

      t.timestamps
    end
  end
end
