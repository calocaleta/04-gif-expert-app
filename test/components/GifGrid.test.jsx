import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe('Pruebas en <GifGrid/>',() => {
    const category='One Punch';
    test('debe de mostrar el loading inicialmente',()=> {
        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs',()=>{
        
    });

});