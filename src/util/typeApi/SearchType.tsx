export type ImageData = {
    height: number;
    url: string;
    width: number;
}

export type ResponseSearch = {
    id: number;
    url: string;
    brand: string;
    title: string;
    image_data: ImageData[];
    createdat: string;
}
