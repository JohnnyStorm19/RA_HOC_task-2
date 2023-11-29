import { IListItemsProps } from "../models";
import { ListItem } from "./ListItem";

function ListItems(props: IListItemsProps) {
  return (
    <>
      {props.list.map((item, id) => {
        return <ListItem key={id} itemData={item} />;
      })}
    </>
  );
}

export default ListItems;
