import axios from 'axios';

export async function login(email, password, router) {
  try {
    const response = await axios.post('/api/login', { email, password });

    if (response.data.access_token) {
      localStorage.setItem('access_token', response.data.access_token);
      window.location.href = '/';
    }

    return response.data;
  } catch (error) {
    throw new Error('로그인 요청에 실패했습니다.');
  }
}

export async function logout() {
  try {
    await axios.post('/api/logout', {}, { headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` } });
    localStorage.removeItem('access_token');
    return { message: '로그아웃 성공' };
  } catch (error) {
    throw new Error('로그아웃 요청에 실패했습니다.');
  }
}
