import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
    	new Recipe('Schnitzel', 'Very Tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
    		new Ingredient('French Fries', 2),
    		new Ingredient('Pork Meat', 1)]),
    	new Recipe('Summer Salad', 'Not bad', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', [
        new Ingredient('Spinach', 2),
        new Ingredient('Avocado', 1),
        new Ingredient('Strawberries', 5)])
  	];

  constructor() { }

  getRecipes() {
  	return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
