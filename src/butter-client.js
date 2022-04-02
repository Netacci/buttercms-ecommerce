import Butter from 'buttercms';
const apikey = process.env.REACT_APP_BUTTER_CMS_API_KEY;
const butter = Butter(apikey);
export default butter;
