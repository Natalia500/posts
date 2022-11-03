import React from "react";
import { getPagesArray } from "../../utl/pages";

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return <div className="btnPaganation"></div>;
};
