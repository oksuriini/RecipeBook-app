import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  id!: string;
  currentRecipe!: Recipe | undefined;

  notFoundImg: string = 'notFound';

  // Handle looking up the ID from url params
  // and serving the right recipe
  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.currentRecipe = this.recipeList.find(
      (recipe) => recipe.id === this.id,
    );
  }

  recipeList: Recipe[] = [
    {
      name: 'Mashed potatoes',
      id: 'I8Huf730OpdUs',
      description: 'Traditional mashed potatoes with sauce',
      imageUrl: 'url-to-mashed',
      difficulty: 3,
    },
    {
      name: 'Fish Soup',
      id: 'Oe9DheJ847UdkS8311',
      description: 'Simple fish soup with potatoes, carrots and spices',
      imageUrl: './assets/foods/fish-soup.jpeg',
      difficulty: 2,
    },
  ];
}
