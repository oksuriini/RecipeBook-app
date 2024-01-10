import { Component } from '@angular/core';
import { RecipeThumbs } from '../recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipeList: RecipeThumbs[] = [
    {
      name: 'Mashed potatoes',
      id: 'I8Huf730OpdUs',
      description: 'Traditional mashed potatoes with sauce',
      imageUrl: './assets/foods/mashed.jpg',
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
