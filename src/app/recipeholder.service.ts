import { Injectable } from '@angular/core';
import { Recipe, RecipeThumbs } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeholderService {
  private recipeList: RecipeThumbs[] = [
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
  constructor() {} // TODO: private backend: BackendService

  getAllRepices(): RecipeThumbs[] {
    return this.recipeList;
  }
}
