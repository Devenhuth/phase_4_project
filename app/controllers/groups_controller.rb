class GroupsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        render json: Group.all
    end

    def show
        group = find_group
        render json: group, serializer: GroupWithInfoSerializer
    end

    private

    def find_group
        group = Group.find(params[:id])
    end

    def render_not_found
        render json: { error: "Group not found" }, status: :not_found
    end
end
