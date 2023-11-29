export interface IArticleProps {
    type: string;
    title: string;
    views: number;
}

export interface IVideoProps {
    type: string;
    url: string;
    views: number;
}

export interface IListItemsProps {
    list: Array<IVideoProps | IArticleProps>;
}

export interface INewProps {
    children: React.ReactElement;
}

export interface IPopularProps {
    children: React.ReactElement;
}