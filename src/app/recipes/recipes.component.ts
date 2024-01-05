import { Component } from '@angular/core';
import { RecipeThumbs } from '../recipe';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipeList: RecipeThumbs[] = [
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
      imageUrl: 'url-to-soup',
      difficulty: 2,
    },
  ];
}
