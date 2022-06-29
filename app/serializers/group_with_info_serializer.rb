class GroupWithInfoSerializer < ActiveModel::Serializer
  attributes :id, :name
  
  has_many :characters
end
