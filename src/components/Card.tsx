import Child from "./Child"

const Card = ({children}:Child) => {
  return (
    <div className={`p-8 shadow-xl bg-white/75`}>
      {children}
    </div>
  )
}

export default Card
