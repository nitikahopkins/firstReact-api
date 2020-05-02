import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Card } from "@material-ui/core";
import MediaCard from "./Component/MediaCard";

function App() {
  //https://itunes.apple.com/search?term=jack+johnson
  const [songs, setSongs] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState("Post Malone");
  console.log(query);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://itunes.apple.com/search?term=${query}`
      );
      console.log(response);
      setSongs(response.data.results);
      console.log(songs);
      // console.log(response.data.hits);
      //setSongs(response.data.hits);
      // } catch (err) {
      //   console.log(err);
      // }
      // console.log(toggle);
      //setArticles("Article was set");
    }
    getData();
  }, [toggle]);

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(event) => setQuery(event.target.value)} />
        <button onClick={() => setToggle(!toggle)}>Search</button>
        <p>{query}</p>
        <div>
          {songs.map((song) => {
            return (
              <MediaCard key={song.trackId} song={song}>
                {/* <h1>{song.artistName}</h1>

                <h2>{song.trackName}</h2>
                <h3>{song.collectionName}</h3>
                <img src={song.artworkUrl100} /> */}
              </MediaCard>
            );
          })}
        </div>
      </header>
    </div>
  );
}
export default App;
