import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
import Modal from "./Modal";
import Post from "./Post";
import { TPost } from "../types/TPost";
interface PropsMain {
  input: string;
}

function Main({ input }: PropsMain) {
  const [toggleModal, setToggleModal] = useState<TPost | null>(null);
  const [appState, setAppState] = useState<TPost[]>([]);
  useEffect(() => {
    const apiUrl = "https://cloud.codesupply.co/endpoint/react/data.json";
    axios.get<TPost[]>(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [setAppState]);

  return (
    <main className="main">
      <Modal setToggleModal={setToggleModal} toggleModal={toggleModal}></Modal>
      <div className="main__container _container">
        <div className="main__post">
          <div className="post__items">
            {appState
              .filter(
                (post, ind) =>
                  post.title.toLocaleLowerCase().includes(input) ||
                  post.text.toLocaleLowerCase().includes(input)
              )
              .map((item, index) => (
                <Post item={item} setToggleModal={setToggleModal}></Post>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
