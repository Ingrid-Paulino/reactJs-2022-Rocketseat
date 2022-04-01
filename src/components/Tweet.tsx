// Leia: eu que definir uma tipagem para as propriedades do meu Tweet
type TweetProps = {
  text: string; // text esta de forma obrigatoria
  // text?: string; // text esta de forma opsional

}

export function Tweet(props: TweetProps) {
  // quando o html tem mais de uma linha, nós colocamos parentese
  return (
    <div>
      {/* <p>Tweet</p> */}
      {/* Para usar js com html é necessario o uso das chaves */}
      <p>{props.text}</p>
    </div>
    
  )
}