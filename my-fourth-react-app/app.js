import React from 'react';

// 1. Define the array outside the component
const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// App Component (concise body)
const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <List />
  </div>
);

// Search Component (block body because of event handler)
const Search = () => {
  const handleChange = (event) => {
    console.log(event); // log the full event
    console.log(event.target.value); // log the input value
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

// List Component (concise body and callback as arrow function)
const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span> | {item.author}</span>
        <span> | {item.num_comments} comments</span>
        <span> | {item.points} points</span>
      </li>
    ))}
  </ul>
);

export default App;