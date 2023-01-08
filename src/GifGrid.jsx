
export const GifGrid = ({category}) => {

    const gifs = ['a','b','c'];

    return (
        <>
            <h3>{category}</h3>
            {
                gifs.map (gif => (
                    <p>{gif}</p>
                ))
            }
        </>
    )
}
