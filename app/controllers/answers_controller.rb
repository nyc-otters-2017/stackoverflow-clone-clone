class AnswersController < ApplicationController
  def show
    @answer = Answer.find(params[:id])
    render json: @answer if request.xhr?
  end

  def index
    @answers = Answer.all
    render json: @answers if request.xhr?
  end

  def new
    @question = Question.find(params[:question_id])
    @answer = Answer.new
  end

  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new(answer_params)
    if @answer.save
      redirect_to "/questions/#{@answer.question.id}/answers"
    else
      flash.now[:notice] = "WRONG!"
      render 'new'
    end
  end

  private

    def answer_params
      params.require(:answer).permit(:body)
    end
end
