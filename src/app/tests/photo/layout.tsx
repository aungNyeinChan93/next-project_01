import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Photo ",
    template: "%s -photo ",
  },
  description: "Photo page",
};

const PhotoLayout = async (props: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <React.Fragment>
      <main>{props.children}</main>
      <main>{props.modal}</main>
    </React.Fragment>
  );
};

export default PhotoLayout;
