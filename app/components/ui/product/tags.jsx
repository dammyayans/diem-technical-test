import React from 'react';
import Tag from '../tag';

const ProductTags = ({ tags }) => {
  return (
    <div className="flex gap-3 mt-3 flex-wrap">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
};

export default ProductTags;
