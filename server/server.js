const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello!'));

const port = process.env.PORT || 5000;

// To display values of variables to display we use back ticks (ES6)
app.listen(port, () => console.log(`Server running on port ${port}`));
