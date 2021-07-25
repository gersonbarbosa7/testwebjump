import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import apiImages from '../../services/apiImages';
import { TextDefault, Title, BoxMovie, Row, Col1, Col2, Image, BoxNoImage } from './styles';

const MovieItemList = (props) => {

    const [movieImg, setMovieImg] = useState();
    const [loading, setLoading] = useState(true);

    const apiKey = '5b8c60328e6491ab18ab8dcd128e77b7';
    const client_key = 'e0bcd8ceef048015bf10c22c93f7d6c3';
    const url = `/${props.item.movie.ids.tmdb}?api_key=${apiKey}&client_key=${client_key}`;

    const getImage = async () => {
        await apiImages.get(url).then((response) => {
            setMovieImg(response.data.hdmovielogo[0].url);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false);
        })
    };

    function MovieImage(){
        if(movieImg){
            return <Image
                    source={{
                    uri: movieImg,
                }}
            />;
        } else {
            return <BoxNoImage>
                <TextDefault>Sem imagem</TextDefault>
            </BoxNoImage>
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        //getImage();
    },[]);

    return <BoxMovie>

        <Row>
            <Col1>
                {loading ? <ActivityIndicator size="large" color="#FFFFFF" /> : <MovieImage />}
            </Col1>

            <Col2>
                <Title>{props.item.movie.title}</Title>
                <TextDefault>Visualizações: {props.item.watchers}</TextDefault>
                <TextDefault>Ano: {props.item.movie.year}</TextDefault>
            </Col2>
        </Row>
            
        </BoxMovie>;
}

export default MovieItemList;