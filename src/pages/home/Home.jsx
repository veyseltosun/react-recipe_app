import React, { useEffect, useState } from 'react'
import { HomeImg, ImgDiv, MainContainer,} from "./HomeStyle"
import Header from '../../components/header/Header'
import axios from 'axios';
import RecipeCardComp from './RecipeCardComp';
import homeSvg from "../../assets/home.svg"

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const APP_ID = "e62b0b0f";
const APP_KEY = "3e90d6f17a2e7fd7004bfb5942623bae";
// const APP_ID = process.env.REACT_APP_APP_ID;
// const APP_KEY = process.env.REACT_APP_APP_KEY;
console.log(APP_ID, APP_KEY);


const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [recipes, setRecipes] = useState("");
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData= async () =>{
    if(query !== ""){

      const result= await axios.get(url)
        console.log(result.data.hits)

        if(!result.data.more){
          alert(`No food with such ${query}`)
        }

      
        setRecipes(result.data.hits)
        setQuery("");
    }else{
      console.log("fill the form it is empty")
    }

  };

  useEffect(() => {
    getData()
  },[]);

  return (
    <div>
        <Header 
        setMeal={setMeal}
        setQuery={setQuery}
        meal={meal}
        query={query}
        mealTypes={mealTypes}
        getData={getData}

        />
        {recipes ?(
          <MainContainer>
            {recipes.map((recipe, index) => (
              <RecipeCardComp key={index} recipe={recipe.recipe}/>
            ))}
          </MainContainer>
        ): (
          <ImgDiv>
           <HomeImg src={homeSvg}/>
          </ImgDiv>
        )} 
    </div>
  )
}

export default Home