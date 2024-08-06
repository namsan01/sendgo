const clientId = '840866843682-rm9vdu7tgnfr0cmb1sjh362vl7a46nl3.apps.googleusercontent.com'; 
const redirectUri = 'http://localhost:5173/googlelogin';
const authCodePath = 'https://accounts.google.com/o/oauth2/v2/auth';
const tokenUrl = 'https://oauth2.googleapis.com/token';

export const getGoogleLoginLink = () => {
    return `${authCodePath}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=profile email`;
};