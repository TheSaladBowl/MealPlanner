const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('/meals/month/:month', (req, res) => {
	res.status(200).json({
		"month": "8",
		"meals": {
			"1": {
				"breakfast": { "title": "Eggs &amp; Bacon", "id": 2 },
				"lunch": { "name": "Frozen Burrito", "id": 3 },
				"dinner": { "name": "Chicken Veggie Rice", "id": 4 }
			},
			"2": {
				"breakfast": { "title": "Eggs &amp; Bacon", "id": 2 },
				"lunch": { "name": "Frozen Burrito", "id": 3 },
				"dinner": { "name": "Pizza", "id": 5 }
			}
		},
		"ingredients": {
			"1": {
				"breakfast": [{ "name": "Eggs &amp; Bacon", "id": 2 }],
				"lunch": [{ "name": "Frozen Burrito", "id": 3 }],
				"dinner": [{ "name": "Chicken Veggie Rice", "id": 4 }]
			},
			"2": {
				"breakfast": [{ "name": "Eggs &amp; Bacon", "id": 2 }],
				"lunch": [{ "name": "Frozen Burrito", "id": 3 }],
				"dinner": [{ "name": "Pizza", "id": 5 }]
			}
		}
	});
});


app.listen(8000, () => console.log("Serving on 8000..."));
