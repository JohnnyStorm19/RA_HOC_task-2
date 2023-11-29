import { IArticleProps, IVideoProps } from "../models";
import Article from "./Article";
import { HOC } from "./HOC";
import Video from "./Video";

export function ListItem({itemData}: {itemData: IVideoProps|IArticleProps}) {
    if (itemData.type === 'video') {
        const EnchancedComponent = HOC(Video, itemData as IVideoProps);
        return (
            <EnchancedComponent />
        )
    }

    if (itemData.type === 'article') {
        const EnchancedComponent = HOC(Article, itemData as IArticleProps);
        return (
            <EnchancedComponent />
        )
    }
}