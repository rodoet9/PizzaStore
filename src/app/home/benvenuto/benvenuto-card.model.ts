export class BenvenutoCard {
  public imagePath: string;
  public title: string;
  public description: string;
  public button: string;

  constructor(
    imagePath: string,
    title: string,
    description: string,
    button: string
  ) {
    this.imagePath = imagePath;
    this.title = title;
    this.description = description;
    this.button = button;
  }
}
