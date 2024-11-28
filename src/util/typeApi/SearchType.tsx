export type ImageData = {
    height: number;
    url: string;
    width: number;
}

export type ResponseSearch = {
    url: string;
    brand: string;
    title: string;
    image_data: ImageData[];
}
