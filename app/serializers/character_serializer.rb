class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :overview
end
