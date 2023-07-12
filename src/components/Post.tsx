import React from "react";
import { TPost } from "../types/TPost";
interface PropsPost {
  item: TPost;
  setToggleModal: (i: TPost | null) => void;
}
function Post({ item, setToggleModal }: PropsPost) {
  return (
    <div className="post__item" onClick={() => setToggleModal(item)}>
      <div className="post__img">
        <img src={item.img} srcSet={`${item.img_2x} 2x`} alt="img" />
      </div>
      <div className="post__tags">{item.tags}</div>
      <div className="post__title">{item.title}</div>
      <div className="post__subtext">
        <div className="post__subtext-autor">{item.autor}</div>
        <div className="post__subtext-data">{item.date}</div>
        <div className="post__subtext-views">{item.views} Views</div>
      </div>
      <div className="post__text">{item.text}</div>
    </div>
  );
}

export default Post;
