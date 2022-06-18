function onResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
  constructor({ url }) {
    this._url = url;
  }

  getUserInfo(token) {
    return fetch(`${this._url}/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then(onResponse);
  }

  setUserInfo(name, email, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(onResponse);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    }).then(onResponse);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then(onResponse);
  }

  checkToken(token) {
    return fetch(`${this._url}/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(onResponse)
  };

  toggleLike(movieId, isLiked, token) {
    return fetch(`${this._url}/movies/${movieId}/likes`, {
      method: `${isLiked ? 'DELETE' : 'PUT'}`,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then(onResponse);
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then(onResponse);
  }
}

export const MainApi = new Api({
  url: 'https://api.romanov.movies.nomoreparties.sbs',
});
