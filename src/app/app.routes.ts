import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
];
