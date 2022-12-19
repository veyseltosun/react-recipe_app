import React from 'react'
import { HeaderContainer, MainHeader } from "./HeaderStyle"
import Form from './Form'

const Header = ({ setQuery, query, meal, setMeal, getData, mealTypes }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
        setMeal={setMeal}
        setQuery={setQuery}
        meal={meal}
        query={query}
        mealTypes={mealTypes}
        getData={getData}
      />
    </HeaderContainer>
  )
}

export default Header