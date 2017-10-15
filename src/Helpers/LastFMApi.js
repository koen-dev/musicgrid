import queryString from 'query-string';

export default class LastFMApi{
    constructor(apiKey){
        this._apiKey = apiKey;
        this._baseUrl = "http://ws.audioscrobbler.com/2.0/?";
        this._defaultParams = {
            api_key: this._apiKey,
            format: "json"
        };
    }

    /**
     * user.gettopalbums
     */
    userTopAlbums(user){
        return this._request({
            method: "user.gettopalbums",
            user: user
        });
    }

    _request(params){
        let options = Object.assign(this._defaultParams, params);
        let query = queryString.stringify(options);
        return fetch(this._baseUrl + query).then((result) => {
            return result.json();
        });
    }
}