class API {

    static getBroadcast (pin) {
        return fetch(`http://localhost:3000/api/v1/broadcastbypin`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            pin: pin
          })
        }).then(resp => resp.json())
    }
}

export default API
