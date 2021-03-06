import expandIcon from "../assets/img/expand-button.svg";
import { useState } from "react";

const JokesPage = () => {
  const [joke, setJoke] = useState({});
  const [expand, setExpand] = useState(false);
  function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((res) => {
        setExpand(false);
        setJoke(res);
      })
      .catch((err) => console.log(err));
  }
  function expandPunch() {
    setExpand(true);
  }
  return (
    <section className="p-10">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-xl sm:text-3xl text-center mb-7 sm:mb-10">
          Wanna Laugh ? 😂
        </h1>
        <button
          onClick={getJoke}
          className="bg-purple-500 text-white px-3 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
        >
          Get a Joke
        </button>
        {Object.keys(joke).length !== 0 && (
          <>
            <p className="mt-10 mb-5 text-xl">
              <span className="font-bold">Category : </span> {joke.type}
            </p>
            <p className="mt-4 mb-5">{joke.setup}</p>
            <img
              onClick={expandPunch}
              className=" transform hover:scale-110 cursor-pointer px-3 py-1 rounded-full mb-3 h-14 w-14"
              src={expandIcon}
              alt="Expand"
            />
            {expand && <p className="mb-5">{joke.punchline}</p>}
          </>
        )}
      </div>
    </section>
  );
};

export default JokesPage;
