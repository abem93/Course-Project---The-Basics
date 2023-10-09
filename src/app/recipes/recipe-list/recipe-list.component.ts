import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://stripedspatula.com/wp-content/uploads/2018/02/bolognese-sauce-instant-pot-1-500x500.jpg'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://stripedspatula.com/wp-content/uploads/2018/02/bolognese-sauce-instant-pot-1-500x500.jpg'),

  ];

  constructor(){

  }
  ngOnInit(){
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
