export interface ICategory {
  id: string
  title: string
  items: IItem[]
}[]

export interface IItem {
  id: string
  title: string
  ingredients: IIngredient[]
  price: number
  imgUrl: string
}

export interface IIngredient {
  id:string
  label: string
  imgSrc: string
}