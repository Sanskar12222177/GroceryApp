import React, { useEffect } from 'react';

const Payment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openRazorpay = () => {
    const options = {
      key: 'rzp_test_1234567890abcdef', // 🔁 Replace with your real Razorpay key
      amount: 14280, // ✅ ₹142.80 in paise
      currency: 'INR',
      name: 'GreenCart',
      description: 'Payment for Order #12345',
      image: 'https://your-logo-url.com/logo.png', // optional
      handler: function (response) {
        alert('✅ Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'Lalith Kishore',
        email: 'lalith@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#0f9d58',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Complete Payment</h1>
      <p className="mb-4">You are paying ₹142.80 for your order.</p>
      <button
        onClick={openRazorpay}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Pay ₹142.80 with Razorpay
      </button>
    </div>
  );
};

export default Payment;