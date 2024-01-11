import { Component, OnInit } from '@angular/core';
import { RecipeThumbs } from '../recipe';
import { RouterLink } from '@angular/router';
import { RecipeholderService } from '../recipeholder.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipeList: RecipeThumbs[] = [];
  constructor(private recipeHolderService: RecipeholderService) {}

  ngOnInit(): void {
    this.recipeList = this.recipeHolderService.getAllRepices();

    this.recipeHolderService.addRepice(
      new RecipeThumbs(
        'fksie83hd9',
        'Example Pie',
        'Nice slice of pie',
        'url-to-pie',
        1,
      ),
    );
  }
}
