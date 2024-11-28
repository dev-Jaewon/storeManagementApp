export type RequestCalculatePrice = {
    exchangePrice: number
    margin: number
    sellPrice: number
    weightPrice: number
}

export type ResponseCalculatePrice = {
    in_come_to_korea: number
    profit: number
    sell: number
}