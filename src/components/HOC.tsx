import React from "react";
import { IArticleProps, IVideoProps } from "../models";
import New from "./New";
import Popular from "./Popular";

export function HOC<T extends IArticleProps | IVideoProps>(
  Component: React.ComponentType<T>,
  props: T
) {
  return class extends React.Component {
    render() {
      if (props.views <= 100) {
        return (
          <New>
            <Component {...props} />
          </New>
        );
      }
      if (props.views >= 1000) {
        return (
          <Popular>
            <Component {...props} />
          </Popular>
        );
      }
      return <Component {...props} />;
    }
  };
}
