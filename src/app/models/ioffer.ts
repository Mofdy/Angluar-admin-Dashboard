export interface Title {
    ar: string;
    en: string;
}
export interface Item {
    price: number;
    title: Title;
}

export interface IOffer {
    id?: string;
    availableDrinks?: Item[];
    availableFries?: Item[];
    availableProducts?: string[];
    description?: Title;
    image?: string;
    keenImage: string;
    price: number;
    swiperMobileImage: string;
    swiperWebImage: string;
    tabs: {
        title: Title;
    }[];
    title: Title;
}
