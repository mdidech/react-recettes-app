import React, { Component } from "react";

class AjouterRecette extends Component {
  state = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const recette = { ...this.state };
    this.props.ajouterRecette(recette);
    Object.keys(recette).forEach(key => {
      recette[key] = "";
    });
    this.setState({ ...recette });
  };
  render() {
    return (
      <div className='card'>
        <form
          className='admin-form ajouter-recette'
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            value={this.state.nom}
            onChange={this.handleChange}
            name='nom'
            placeholder='nom de la recette'
          />
          <input
            type='text'
            value={this.state.image}
            onChange={this.handleChange}
            name='image'
            placeholder='image de la recette'
          />
          <textarea
            name='ingredients'
            value={this.state.ingredients}
            onChange={this.handleChange}
            id='ingredients'
            rows='3'
            placeholder='ingredients de la recette'
          />
          <textarea
            name='instructions'
            value={this.state.instructions}
            onChange={this.handleChange}
            id='instructions'
            rows='15'
            placeholder='instructions de la recetee'
          />
          <button type='submit'>Ajouter une recette</button>
        </form>
      </div>
    );
  }
}

export default AjouterRecette;
