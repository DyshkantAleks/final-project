export function init() {
  window.gapi.load('auth2', function () {
    window.gapi.auth2
      .init({
        // не забудьте указать ваш ключ в .env
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
}

export const signIn = () => {
  const auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signIn().then((googleUser) => {
    // метод возвращает объект пользователя
    // где есть все необходимые нам поля
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // токен
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID Token: ' + id_token);
  });
};
export const signOut = () => {
  const auth2 = window.gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
};
