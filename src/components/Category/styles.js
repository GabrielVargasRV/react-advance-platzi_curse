import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Anchor = styled(Link)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const Image = styled.img`
    border: 2px solid #ddd;
    box-shadow: 0px 5px 8px rgba(0,0,0,.2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`