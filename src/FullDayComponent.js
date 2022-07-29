import {nameForMonth} from "./utils";


export default function FullDayComponent(props) {
    let day = props.fullDay.day;
    let meal = props.data.meals["" + day];
    console.log(props)
    let ingredients = props.data.ingredients[String(day)];
    console.log(ingredients)

    function returnToCal(e) {
        console.log(e.key)
        if (e.key === 'Escape') {
            props.setFullDay({
                set: false, day: null, month: null
            })
        }
    }


    function renderIngredientList(ingredients, meal) {
        let ings = ingredients[meal];
        console.log(ings)
        if (!ingredients[meal]) {
            return (<div></div>)
        }
        return (<div>
                <div>Ingredients:</div>
                <ul>
                    {ings.map(ing =>
                        <li className={"FullDayIngredient"}>
                            <span> {ing.name} </span>
                            <button>Remove</button>

                        </li>

                    )}

                </ul>
            </div>
        )
    }

    return (
        <div tabIndex={0} onKeyDown={e => returnToCal(e)} className={"FullDayCell"}
             id={`FullDay-${props.month}-${day}`}>
            <h1>{nameForMonth(props.month)} {day}</h1>
            <button onClick={e => returnToCal({key: 'Escape'})}>Return to calendar</button>
            <p></p>
            <div className={"FullDayCellMeal"}><span
                className={"DayCellMealTitle"}>Breakfast:</span> {JSON.stringify(meal.breakfast.name)}
                {renderIngredientList(ingredients, 'breakfast')}
            </div>
            <div className={"FullDayCellMeal"}><span
                className={"DayCellMealTitle"}>Lunch:</span> {JSON.stringify(meal?.lunch?.name)}</div>
            {renderIngredientList(ingredients, 'lunch')}
            <div className={"FullDayCellMeal"}><span
                className={"DayCellMealTitle"}>Dinner:</span> {JSON.stringify(meal?.dinner?.name)}</div>
            {renderIngredientList(ingredients, 'dinner')}
        </div>
    );
}