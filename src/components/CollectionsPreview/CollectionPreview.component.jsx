import React from "react";

import "./CollectionPreview.styles.scss";

import CollectionItem from "../collectionItems/CollectionItem.component";

const CollectionsPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionsPreview;
