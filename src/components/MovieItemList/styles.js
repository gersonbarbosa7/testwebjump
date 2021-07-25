import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 40px 0;
    background: black;
    flex: 1
`;

export const Row = styled.View`
    padding: 20px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Col1 = styled.View`
    flex: .4;
    margin-right: 20px
`;

export const Col2 = styled.View`
    flex: 1
`;

export const Image = styled.Image`
    width: 100%;
    height: 110px
`;

export const BoxMovie = styled.TouchableOpacity`
    margin-bottom: 20px
`;

export const BoxNoImage = styled.View`
    background-color: #333;
    width: 100%;
    height: 110px;
    padding: 5px;
    text-align: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #ed1b24;
    margin: 10px 0;
    font-size: 22px;
    font-weight: bold
`;

export const TextDefault = styled.Text`
    color: #FFF;
    margin: 10px 0
`;