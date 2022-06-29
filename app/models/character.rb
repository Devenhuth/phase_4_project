class Character < ApplicationRecord
    belongs_to :role
    belongs_to :group

    validates :name, presence: true
    validates :image, presence: true
    validates_uniqueness_of :name
    validates :group_id, inclusion: [1, 2, 3, 4]
    validates :role_id, inclusion: [1, 2, 3]
end
