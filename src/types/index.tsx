export interface IRegisterData {
    email:string,
    password:string,
    firstname:string,
    lastname:string
}

export interface ILoginData {
    email:string,
    password:string
}

export interface ICartProduct {
  index: number;
  quantity: number;
}

export interface IDownload{
    number?:number,
    date?:string,
    status?:string,
    total?:number,
    action?:string,
    download?:string,
    variant: "download" | "noDownload"
}

export interface IOrder{
    number?:number,
    date?:string,
    status?:string,
    total?:number,
    action?:string,
    variant: "Order" | "noOrder"
}

export interface IHomeSliderCard {
    src:string,
    name:string,
    price:number,
    path:string
}

export interface IProductCard {
    img: string,
    name: string,
    price:number,
    index:number,
    path:string
}

export interface IBlogCard{
    img: string ,
    category: string ,
    date: string ,
    title: string ,
    desc: string ,
    path: string
}

export interface Istore {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: ICartProduct[];
}