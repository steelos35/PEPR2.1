class UnitsController < ApplicationController
    def index
      if (params[:student_id])
        @units = Student.find(params[:student_id]).units
      else
        @units = Unit.all
      end
      render json: { units: @units}
      end
    
      def show
        unit_with_id = Unit.find params[:id]
        render json: { unit: unit_with_id }
      end
    
      def create
        @student = Student.find(params[:student_id])
        new_unit = @student.units.create(unit_params)
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
          :unit_name,
          :run,
          :gallop,
          :hop,
          :jump,
          :skip
        )
      end
end
