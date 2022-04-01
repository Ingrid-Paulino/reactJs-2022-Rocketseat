import { useState } from "react"
import { Tweet } from "./components/Tweet"

function App() {
  // useState cria uma variável que é monitorada pelo compnente, ou seja, toda vez que essa variável muda o seu valo, o componente é remontado/renderizado com as novas informaçoes daquela variável
  // O que eu passo dentro do () é o valor inicial do meu estado
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ]);

  function createTweet() {
    setTweets([...tweets, 'Tweet 5'])
  }

  return(
    <div>
      {/* <Tweet text="Tweet 1" /> */}
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />
      })}

      <button onClick={createTweet}>Adicionar tweet</button>
    </div>
  )
}

export default App
