export class RecipeThumbs {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  difficulty: number;
  constructor(
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    difficulty: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
  }
}
