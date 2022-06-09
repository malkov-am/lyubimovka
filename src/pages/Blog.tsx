import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import "./Blog.scss";
import cardData from "../components/BlogCard/cardData.js";
const asteriskPath = require("../assets/asterisk.svg").default;

const Blog = () => {
  useEffect(() => {
    document.title = "Блог | Любимовка";
  }, []);
  return (
    <div className='blog'>
      <div className='blog__header-container'>
        <div className='notice'>
          <p className='notice__text'>
            Журналисты, театроведы, критики, искусствоведы и студенты профильных
            вузов ведут журнал фестиваля Любимовка под руководством Натальи
            Дубашинской и Полины Пхор.
          </p>
          <img
            className='notice__asterisk'
            src={asteriskPath}
            alt='Примечание'
          />
          <p className='notice__contact'>
            Если вы хотите стать автором, пишите на{" "}
            <a className='notice__link' href='mailto:critics@lubimovka.ru'>
              critics@lubimovka.ru
            </a>
          </p>
        </div>
        <h1 className='blog__header'>Блог Любимовки</h1>
      </div>
      <div className='blog__card-container'>
        {cardData.map((cardData) => (
          <BlogCard {...cardData} key={cardData.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
