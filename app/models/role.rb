class Role < ApplicationRecord
    has_many :characters
    has_many :groups, through: :characters
end
