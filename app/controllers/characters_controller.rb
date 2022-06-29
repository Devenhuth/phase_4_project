class CharactersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Character.all
    end

    def show
        character = find_character
        render json: character
    end

    def create
        character = Character.create!(character_params)
        render json: character, status: :created
    end

    def destroy
        character = find_character
        character.destroy
        head :ok
    end

    def update
        character = find_character
        character.update!(image: params[:image])
        render json:character
    end

    private

    def find_character
        character = Character.find(params[:id])
    end

    def render_not_found
        render json: { error: "Character not found" }, status: :not_found
    end

    def character_params
        params.permit(:name, :image, :overview, :role_id, :group_id)
    end

    def render_unprocessable(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
