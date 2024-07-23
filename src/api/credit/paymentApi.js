import { TossPayments } from '@tosspayments/payment-sdk';

export async function handlePayment(product) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify({
        amount: product.price,
        order_id: product.order_id,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      // 결제 요청 성공 처리
      const tossPayments = TossPayments(import.meta.env.VITE_TOSS_PAYMENTS_CLIENT_KEY);
      tossPayments.requestPayment('카드', {
        amount: product.price,
        orderId: product.order_id,
        successUrl: 'localhost:5173/success',
        failUrl: 'localhost:5173/fail',
      });
    } else {
      throw new Error(`결제 실패: ${data.message}`);
    }
  } catch (error) {
    console.error('결제 중 오류 발생:', error);
    throw new Error('결제 중 오류가 발생했습니다.');
  }
}
