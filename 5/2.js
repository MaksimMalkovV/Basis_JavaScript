"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};
/*
console.log(post.author);

let obj1 = Object.entries(post.comments[0])
console.log(obj1[3][1].dislikes);

let obj2 = Object.entries(post.comments[1])
console.log(obj2[0][1]);

console.log(obj2[2][1])
*/