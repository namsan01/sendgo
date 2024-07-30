import axios from 'axios';

export async function register(name, email, password , phone) {
  try {
    const response = await axios.post('/api/register', { name, email, password , phone });
    return response.data;
  } catch (error) {
    throw new Error('회원가입 요청에 실패했습니다.');
  }
}

export const checkEmail = async (email) => {
  const response = await axios.post('/api/check-email', { email });
  return response.data;
};