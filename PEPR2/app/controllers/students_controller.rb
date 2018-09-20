class StudentsController < ApplicationController
        def index
          render json: { students: Student.all }
        end
      
        def show
          student_with_id = Student.find params[:id]
          render json: { student: student_with_id }
        end
      
        def create
          new_student = Student.new(student_params)
          new_student.save
          render json: { student: new_student }
        end
      
        def update
          student_with_id = Student.find params[:id]
          student_with_id.update(student_params)
          render json: { student: student_with_id }
        end
      
        def destroy
          student.find(params[:id]).destroy
          render json: { message: "Student #{params[:id]} deleted" }
        end
      
        private
      
        def student_params
          params.require(:student_data).permit(
            :student_name,
            :age,
            :grade
          )
        end
end
