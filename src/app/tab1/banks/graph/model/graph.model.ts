export interface ICard{
    spent: number,
    requisites: string,
    time: string,
    market: string
}

export interface ICardView{
    spent: number,
    requisites: string,
    time: Date,
    market: string
}