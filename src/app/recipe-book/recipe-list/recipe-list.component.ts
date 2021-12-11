import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.iconscout.com/icon/free/png-256/pastry-short-cake-shortcake-dessert-sweet-food-emoj-symbol-30671.png'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.iconscout.com/icon/free/png-256/pastry-short-cake-shortcake-dessert-sweet-food-emoj-symbol-30671.png'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.iconscout.com/icon/free/png-256/pastry-short-cake-shortcake-dessert-sweet-food-emoj-symbol-30671.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
