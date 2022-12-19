import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    DetailContainer,
    DetailPart,
    ImgContainer,
    HeaderContainer,
    IngContainer,
    OtherPart,
} from './DetailsStyle';
import dietSvg from '../../assets/diet.svg';

function Details() {
    const location = useLocation();

    return (
        <DetailContainer>
            <HeaderContainer>
                <h1>{location.state.label}</h1>
                <img src={dietSvg} alt="" />
            </HeaderContainer>
            <DetailPart>
                <OtherPart>
                    <>Nutrients</>
                    <p>
                        {location.state.totalNutrients.CA.label} :{' '}
                        {Math.round(location.state.totalNutrients.CA.quantity)}
                        {location.state.totalNutrients.CA.unit}
                    </p>
                    <p>
                        {location.state.totalNutrients.CHOCDF.label} :{' '}
                        {Math.round(
                            location.state.totalNutrients.CHOCDF.quantity
                        )}
                        {location.state.totalNutrients.CHOCDF.unit}
                    </p>
                    <p>
                        {location.state.totalNutrients.CHOLE.label} :{' '}
                        {Math.round(
                            location.state.totalNutrients.CHOLE.quantity
                        )}
                        {location.state.totalNutrients.CHOLE.unit}
                    </p>
                    <p>
                        {location.state.totalNutrients.ENERC_KCAL.label} :{' '}
                        {Math.round(
                            location.state.totalNutrients.ENERC_KCAL.quantity
                        )}
                        {location.state.totalNutrients.ENERC_KCAL.unit}
                    </p>
                    <p>{location.state.totalWeight}</p>
                    <p>Calories: {Math.round(location.state.calories)}</p>
                    {location.state.digest.slice(0, 4).map((item, index) => (
                        <p key={index}>
                            {item.label} : {Math.round(item.total)}
                        </p>
                    ))}
                </OtherPart>
                <ImgContainer>
                    <img
                        src={location.state.image}
                        alt={location.state.label}
                    />
                </ImgContainer>
                <IngContainer>
                    {location.state.ingredientLines.map((line, index) => (
                        <div key={index}>
                            <p>
                                {index + 1} - {line}
                            </p>
                            <br />
                        </div>
                    ))}
                </IngContainer>
            </DetailPart>
        </DetailContainer>
    );
}

export default Details;