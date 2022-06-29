class RolesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        render json: Role.all
    end

    def show
        role = find_role
        render json: role, serializer: RoleWithInfoSerializer
    end

    private

    def find_role
        role = Role.find(params[:id])
    end

    def render_not_found
        render json: { error: "Role not found" }, status: :not_found
    end
end
