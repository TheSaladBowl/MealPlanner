import DayCellComponent from "./DayCellComponent";
import SpacerDayCellComponent from "./SpacerDayCellComponent";
import {useState} from "react";
import FullDayComponent from "./FullDayComponent";
import {dayCount, nameForMonth} from "./utils";


function CalendarView(props) {
    let calendarItems = [];
    let monthStart = new Date(props.year, props.month - 1, 1).getDay();
    for (let i = 0; i < monthStart; i++) {
        calendarItems.push({month: props.month, spacer: true})
    }
    for (let i = 0; i < dayCount(props.month)(props.year); i++) {
        calendarItems.push({month: props.month, day: i + 1})
    }

    let monthName = nameForMonth(props.month);

    // let {data: data, error, isLoading} = useFetch(`http://localhost:5005/meals/month/${props.month}`,{
    //     headers: { accept: "application/json", 'Access-Control-Allow-Origin': 'no-cors' },
    // });

    let isLoading = false;
    let error = null;
    let data = props.data;

    console.log(data.meals["1"])
    console.log(error)
    console.log(isLoading)
    let content = () => error ? <div className={'error'}>Could not retrieve meal data</div> : (
        <div className={"calendarCellBlock"}>
            <div className={"WeekdayName"}>Sunday</div>
            <div className={"WeekdayName"}>Monday</div>
            <div className={"WeekdayName"}>Tuesday</div>
            <div className={"WeekdayName"}>Wednesday</div>
            <div className={"WeekdayName"}>Thursday</div>
            <div className={"WeekdayName"}>Friday</div>
            <div className={"WeekdayName"}>Saturday</div>
            {calendarItems.map(item =>
                item.spacer ?
                    <SpacerDayCellComponent month={item.month}/>
                    :
                    <DayCellComponent setFullDay={props.setFullDay}
                                      meal={data.meals[String(item.day)]} month={item.month} day={item.day}
                                      key={item.day}/>
            )}
        </div>
    )

    return (
        <div className={'Calendar'} id={`calendar-${props.month}`}>
            <h1 className={'monthName'}>{monthName}</h1>
            {isLoading ? <div className={'Loading'}>Loading</div> : content()}
        </div>
    )
}

export default function CalendarComponent(props) {
    let [fullDay, setFullDay] = useState({set: true, day: 2, month: 8});
    const dummyData = {
        "month": "8",
        "meals": {
            "1": {
                "breakfast": {"title": "Eggs &amp; Bacon", "id": 2},
                "lunch": {"name": "Frozen Burrito", "id": 3},
                "dinner": {"name": "Chicken Veggie Rice", "id": 4}
            },
            "2": {
                "breakfast": {"title": "Eggs &amp; Bacon", "id": 2},
                "lunch": {"name": "Frozen Burrito", "id": 3},
                "dinner": {"name": "Pizza", "id": 5}
            }
        },
        "ingredients": {
            "1": {
                "breakfast": [{"name": "Eggs &amp; Bacon", "id": 2}],
                "lunch": [{"name": "Frozen Burrito", "id": 3}],
                "dinner": [{"name": "Chicken Veggie Rice", "id": 4}]
            },
            "2": {
                "breakfast": [{"name": "Eggs &amp; Bacon", "id": 2}],
                "lunch": [{"name": "Frozen Burrito", "id": 3}],
                "dinner": [{"name": "Pizza", "id": 5}]
            }
        }
    }
    console.log(fullDay)
    return fullDay.set ? FullDayComponent({...props, data: dummyData, setFullDay, fullDay}) : CalendarView({
        ...props,
        data: dummyData,
        setFullDay
    })
}