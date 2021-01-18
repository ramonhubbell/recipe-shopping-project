import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recipetineats.com%2Fhoney-garlic-chicken%2F&psig=AOvVaw2srC6Ir63Wr_4AyQqrnsCO&ust=1611085302288000&source=images&cd=vfe&ved=2ahUKEwj83LfKnqbuAhUWg6wKHb3BAcoQjRx6BAgAEAc')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
