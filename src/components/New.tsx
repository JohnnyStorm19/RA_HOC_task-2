import { INewProps } from "../models";

function New(props: INewProps) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
}

export default New;