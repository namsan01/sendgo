import axios from 'axios';

export async function register(name, email, password) {
  try {
    const response = await axios.post('/api/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error('회원가입 요청에 실패했습니다.');
  }
}
