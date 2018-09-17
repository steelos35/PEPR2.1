class UnitsController < ApplicationController
    def index
        render json: { books: Unit.where("student_id = ?",params[:student_id]) }
      end
    
      def show
        unit_with_id = Unit.find params[:id]
        render json: { unit: unit_with_id }
      end
    
      def create
        new_unit = Unit.new(unit_params)
        new_unit.save
        render json: { unit: new_unit }
      end
    
      def update
        unit_with_id = Unit.find params[:id]
        unit_with_id.update(unit_params)
        render json: { unit: unit_with_id }
      end
    
      def destroy
        Unit.find(params[:id]).destroy
        render json: { message: "Unit #{params[:id]} deleted" }
      end
    
      private
    
      def unit_params
        params.require(:unit_data).permit(
          :name_first,
          :name_last
        )
      end
end
