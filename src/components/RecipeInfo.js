import React from "react"
import allRecipes from "../allRecipes"   

export default class RecipeInfo extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Grandma's Delicious<br />{this.props.title}</h2>
        <img className="img-hero" src={this.props.imageUrl} alt="Pancakes" />
        <h2>Directions</h2>
        <div className="directions container">
          <div className="ingredients">
            <h4>Ingredients</h4>
                {allRecipes.splice(0,1).map((recipe, index) => {
                return ( 
                        <ul key={index}>
                          {recipe.ingredients.map((ingred, i) => <li key={i}>
                          {ingred}
                          </li>)}
                        </ul>
                      )
                    })}
          <div className="recipeImg">
            <img className="smImg" src={this.props.smImageUrl} alt="recipe" />
            <span><hr /></span>
          </div>
          </div>
          <div className="recipeDirect">
            <h4>Step 1</h4>
            <p>{this.props.step1}</p>
            <hr />
            <h4>Step 2</h4>
            <p>{this.props.step2}</p>
            <hr />
            <h4>Step 3</h4>
            <p>{this.props.step3}</p>
          </div>
        </div>
        <footer>
          Grandma's Delicious Recipes ™️
        </footer>
      </div>
    )
  }
}