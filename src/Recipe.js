import IngredientsList from './IngredientList';
import Instructions from './Instructions';
import Summary from './Summary';


const Recipe = ({ name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <Summary ingredients={ingredients.length} steps={steps.length} title={name}/>
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions"
                      steps={steps} />
    </section>

export default Recipe