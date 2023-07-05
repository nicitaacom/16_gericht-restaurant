export interface IFullMenu {
  id: string;
  title: string;
  items: IItem[]
}[]

export interface IItem {
    id: string;
    title: string;
    subTitle: string[]
    price: number;
    imgUrl: string;
}[]