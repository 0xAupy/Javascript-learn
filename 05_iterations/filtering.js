const books = [
  {
    title: "academics",
    genre: "thriler",
    publish: 1987,
  },
  {
    title: "family",
    genre: "melodrama",
    publish: 1963,
  },
  {
    title: "school",
    genre: "action",
    publish: 2006,
  },
  {
    title: "bossbaby",
    genre: "comedy",
    publish: 2002,
  },
  {
    title: "first love hurts",
    genre: "tragedy",
    publish: 2015,
  },
  {
    title: "one sided love",
    genre: "sad",
    publish: 2022,
  },
  {
    title: "Miss you",
    genre: "melodrama",
    publish: 2025,
  },
];

const sadBooks = books.filter((type) => type.genre === "tragedy");
console.log(sadBooks);

const booksBeforeMyBirth = books.filter((year) => {
  return year.publish < 2002;
});
console.log(booksBeforeMyBirth);
