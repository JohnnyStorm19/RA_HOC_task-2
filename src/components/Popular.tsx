import { IPopularProps } from "../models";

function Popular(props: IPopularProps) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
}

export default Popular;