import { ImageData } from "./SearchType";

export type RequestSearchProduct = {
    url: string
    title: string
}

export type ResponseSearchProduct = {
    result: boolean
}

export type ResponseSearchProductDetail = {
    id: string
    image_data: ImageData[]
    url: string
}
