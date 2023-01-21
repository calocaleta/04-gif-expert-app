
export const GifItem = ({id,title,url}) => {
  return (
    <div className="card">
        <img src={url} key={id} alt={title} />
        <p>{title}</p>
    </div>
  )
}
