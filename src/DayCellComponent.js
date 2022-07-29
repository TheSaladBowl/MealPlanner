
export default function DayCellComponent(props) {
    return (
        <div tabIndex={0} onClick={() => props.setFullDay({set: true, month: props.month, day: props.day})} className="DayCell" id={`cell-${props.month}-${props.day}`}>
            <h1>{props.day}</h1>
            <div className={"DayCellMeal"}> <span className={"DayCellMealTitle"}>Breakfast:</span> {JSON.stringify(props.meal?.breakfast?.name)}</div>
            <div className={"DayCellMeal"}> <span className={"DayCellMealTitle"}>Lunch:</span> {JSON.stringify(props.meal?.lunch?.name)}</div>
            <div className={"DayCellMeal"}> <span className={"DayCellMealTitle"}>Dinner:</span> {JSON.stringify(props.meal?.dinner?.name)}</div>
        </div>
    );
}