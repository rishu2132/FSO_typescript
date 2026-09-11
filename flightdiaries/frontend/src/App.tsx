import { useEffect, useState } from "react";
import type { DiaryEntry } from "./types";
import diaryServices from "./services/diaryServices";

const App = () => {

  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
      diaryServices.getAll().then(initialEntries => {
        setEntries(initialEntries);
      });
  },[]);

  
  return (
    <div>
      <h1>Diaries entries</h1>
        {entries.map(entry => 
          <div key={entry.id}>
            <h3>{entry.date}</h3>
            <p>Weather: {entry.weather}</p>
            <p>Visibility: {entry.visibility}</p>
          </div>
        )}
    </div>
  );
};

export default App;