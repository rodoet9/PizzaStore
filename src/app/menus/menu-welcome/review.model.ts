export class ReviewModel {
  public rating: any;
  public review: string;
  public name: string;
  public email: string;
  public key: string;

  constructor(
    rating: any,
    review: string,
    name: string,
    email: string,
    key?: string
  ) {
    this.rating = rating;
    this.review = review;
    this.name = name;
    this.email = email;
    this.key = key;
  }
}
