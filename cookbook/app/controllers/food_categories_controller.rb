class FoodCategoriesController < ApplicationController

  def index
    @food_cotegories = FoodCategory.all
  end

end
