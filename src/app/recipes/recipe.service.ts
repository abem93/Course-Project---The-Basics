import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'A super Tasty Schnitzel that is just awesome!', 'https://stripedspatula.com/wp-content/uploads/2018/02/bolognese-sauce-instant-pot-1-500x500.jpg',[
      new Ingredient('Meat', 1),
      new Ingredient('French fries', 20)
    ]),
    new Recipe('Big Fat Juicy Burger', 'What else is there to say?', 'https://stripedspatula.com/wp-content/uploads/2018/02/bolognese-sauce-instant-pot-1-500x500.jpg',[
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
