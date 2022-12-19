import React from 'react'
import { RecipeCard , RecipeImage, Button, RecipeHeader} from './HomeStyle';
import defaultImg from "../../assets/default-image.jpg"

const RecipeCardComp = ({recipe}) => {
  return (
    <RecipeCard>
        <RecipeHeader>{recipe?.label}</RecipeHeader>
        <RecipeImage src={recipe?.image || defaultImg}/>
        <Button >View More</Button>
        
    </RecipeCard>
  )
}

export default RecipeCardComp