"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import BlogBox from "../newBlogs/BlogBox";

const BlogPageComp = () => {
  const [posts, setPosts] = useState([-1]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numbersOfBtns, setNumbersOfBtns] = useState([-1]);
  const [filteredBtns, setFilteredBtns] = useState([-1]);
  const [colorFocus, setColorFocus] = useState(1);
  const paginate = 4;

  useEffect(() => {
    axios
      .get(
        `http://localhost:27017/api/get-blog-page-posts?pn=${pageNumber}&pgn=${paginate}`
      )
      .then((d) => {
        setPosts(d.data.GoalPosts);
        setNumbersOfBtns(
          Array.from(Array(Math.ceil(d.data.AllPostsNum / paginate)).keys())
        );
        setAllPostsNumber(d.data.AllPostsNum);
      })
      .catch((e) => console.log(e));
  }, [pageNumber]);

  useEffect(() => {
    if (numbersOfBtns[0] != -1 && numbersOfBtns.length > 0) {
      const arr = [];
      numbersOfBtns.map((n) => {
        if (
          n == 0 ||
          (n < pageNumber + 1 && n > pageNumber - 3) ||
          n == numbersOfBtns.length - 1
        ) {
          arr.push(n);
        }
      });
      setFilteredBtns(arr);
    } else if (numbersOfBtns.length == 0) {
      setFilteredBtns([]);
    }
  }, [numbersOfBtns]);

  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        {posts[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : posts.length < 1 ? (
          <div className="flex justify-center items-center w-full p-8">
            مقاله‌ای موجود نیست...
          </div>
        ) : (
          <div className="flex flex-wrap justify-between items-center gap-2">
            {posts.map((da, i) => (
              <BlogBox key={i} data={da} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-4">
        {filteredBtns[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          </div>
        ) : (
          filteredBtns.map((da, i) => (
            <button
              className={
                colorFocus == da + 1
                  ? "cursor-pointer flex justify-center items-center bg-orange-600 text-white w-8 h-8 rounded transition-all duration-300 hover:bg-orange-500"
                  : "cursor-pointer flex justify-center items-center bg-indigo-500 text-white w-8 h-8 rounded transition-all duration-300 hover:bg-orange-500"
              }
              onClick={() => {
                setPageNumber(da + 1);
                setColorFocus(da + 1);
                goTopCtrl();
              }}
              key={i}
            >
              {da + 1}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogPageComp;
