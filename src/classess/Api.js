class Api {
  constructor(baseUrl, credentials='omit') {
    this._baseUrl = baseUrl;
    this._credentials = credentials;
  }
  _get(url){
    return this._fetch('GET', url);
  }
  _json(method, url, data){
    return this._fetch(method, url, { 'Content-Type': 'application/json'}, JSON.stringify(data)).then(res=> res.json() );
  }
  _delete(url){
    return this._fetch('DELETE', url);
  }
  _put(url){
    return this._fetch('PUT', url);
  }
  _fetch(method, url, headers={}, body=null){
    const data =  {
      method: method,
      credentials: this._credentials,
      headers: Object.assign({},this._headers, headers),
      body: body
    }
    const fetchPromise = fetch(this._baseUrl+url, data).then( (result)=> result.ok?result : Promise.reject(result));
    return fetchPromise;
    //return (new Promise(resolve => setTimeout(resolve, 1000))).then(()=>fetchPromise);
  }
}

export default Api;
