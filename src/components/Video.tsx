import { IVideoProps } from "../models";

function Video(props: IVideoProps) {
    return (
        <div className="item item-video">
            <iframe 
                width="560" 
                height="315" 
                src={props.url} 
                allow="autoplay; encrypted-media" 
                allowFullScreen
            ></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}

export default Video;