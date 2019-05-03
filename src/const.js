islocal = true;
const local_URL =  'http://localhost:8000'
const heroku_URL =  'http://hmappstore.herokuapp.com'

function getBaseURL() {
    if (islocal) {
        return local_URL;
    }
    return heroku_URL
}

export default getBaseURL