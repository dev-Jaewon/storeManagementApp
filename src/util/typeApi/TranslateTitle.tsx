export type RequestTranslateTitle = {
  list: {
    title: string;
    url: string;
  }[];
};

export type ResponseTranslateTitle = {
  title: string;
  url: string;
  isSelected: boolean;
}[];
