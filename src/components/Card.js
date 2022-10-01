import React from "react"
import RecipeInfo from "./RecipeInfo"
import allRecipes from "../allRecipes"

export default class Card extends React.Component {
    render() {
      const allGRecipes = allRecipes.map(recipes => {
           return (
            <RecipeInfo
              key={recipes.id}
              {...recipes}
            />
           )
      })
          return (
            <div>
            {allGRecipes}
            </div>
          )
  }
}