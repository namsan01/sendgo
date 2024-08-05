import axios from 'axios';

const restApiKey = 'e0311076f7cd9506e6e99ad76e577afb'; 
const redirectUri = 'http://localhost:5173/kakaologin';
const authCodePath = 'https://kauth.kakao.com/oauth/authorize';
const accessTokenUrl = 'https://kauth.kakao.com/oauth/token';

export const getKakaoLoginLink = () => {    
    return `${authCodePath}?client_id=${restApiKey}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;
};

export const getAccessToken = async (code) => {
  const header = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  };

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: restApiKey,
    redirect_uri: redirectUri,
    code: code,
  });

  try {
    const res = await axios.post(accessTokenUrl, params, header);
    return res.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error; 
  }
};
