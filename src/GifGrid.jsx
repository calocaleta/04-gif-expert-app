
import { GifItem } from './components/GifItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log({isLoading});

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem
                            image={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
