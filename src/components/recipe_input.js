/* global $ */
import React from 'react';
import PropTypes from 'prop-types';

class RecipeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      imageUrl: '',
      directions: '',
      ingredients: '',
    };
  }

  // bsf7et al edit bktblk sho ante kateb
  componentWillReceiveProps(nextProps) {
    if (nextProps.editRecipe === true) {
      this.setState({
        title: nextProps.recipeList[nextProps.editTarget].title,
        imageUrl: nextProps.recipeList[nextProps.editTarget].imageUrl,
        directions: nextProps.recipeList[nextProps.editTarget].directions,
        ingredients: nextProps.recipeList[nextProps.editTarget].ingredients,
      });
    } else {
      this.setState({ title: '', imageUrl: '', directions: '', ingredients: '' });
    }
  }

  closeModal = () => {
    $('#modal').modal('close');
    this.props.editOff();
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    if (this.state.title.length !== 0) {
      const newRecipe = {
        ...this.state,
      };
      this.props.addRecipe(newRecipe);
      this.setState({ title: '', imageUrl: '', directions: '', ingredients: '' });
    }
  }

  handleDelete = () => {
    this.props.deleteRecipe();
  }

  handleUpdate = (position) => {
    const updatedRecipe = { ...this.state };
    this.props.updateRecipe(position, updatedRecipe);
  }

  render() {
    return (
      <div id="modal" className="modal bottom-sheet">
        <div className="modal-content">
          <i className="material-icons icon" role="button" tabIndex="0" onClick={this.closeModal}>close</i>
          <h4>{this.props.editRecipe ? 'Edit Recipe' : 'Add Recipe'}</h4>
          <div className="row">
            <form id="recipe-form" className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    name="title"
                    type="text"
                    placeholder="Preferably something tasty."
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="title">Recipe Title</label>
                </div>

                <div className="input-field col s12">
                  <input
                    name="imageUrl"
                    type="text"
                    placeholder="Click the link over there if you need one."
                    value={this.state.imageUrl}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="recipe-image">Image URL</label>
                </div>

                <div className="input-field col s12">
                  <textarea
                    name="directions"
                    className="materialize-textarea"
                    placeholder="Share the love."
                    value={this.state.directions}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="textarea1">Directions</label>
                </div>

                <div className="input-field col s12">
                  <textarea
                    name="ingredients"
                    className="materialize-textarea"
                    placeholder="What's needed to make this delicious thing?"
                    value={this.state.ingredients}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="textarea2">Ingredients (comma separated)</label>
                </div>

              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          {/* If edit mode is on */}
          {this.props.editRecipe ?
            <div>
              <a href="#!" className="modal-action modal-close waves-effect waves-red btn-flat" onClick={this.handleDelete}>Delete Recipe</a>
              <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={() => this.handleUpdate(this.props.editTarget)}>Edit Recipe</a>
              {/* If edit mode is off */}
            </div> :
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.handleSubmit}>Save Recipe</a>
          }
        </div>
      </div>

    );
  }
}
/*
RecipeInput.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  editRecipe: PropTypes.bool.isRequired,
  editOff: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
  editTarget: PropTypes.number.isRequired,
  recipeList: PropTypes.array.isRequired,
  updateRecipe: PropTypes.func.isRequired,
};
*/
export default RecipeInput;
