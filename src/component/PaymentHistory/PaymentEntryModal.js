import { useState } from 'react';
import axios from 'axios';
import PaymentInput from './PaymentInput';

export default function PaymentEntryModal({ onClose }) {
  const [paymentInput, setPaymentInput] = useState({
    content: '',
    price: '',
    paymentDt: '',
    categoryId: '',
  });

  function handleInputChange(inputIdentifier, newValue) {
    setPaymentInput((prevPaymentInput) => {
      return {
        ...prevPaymentInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  function handleEntryClick() {
    axios
      .post(
        'https://fintrack.site/payments',
        {
          content: paymentInput.content,
          price: parseInt(paymentInput.price),
          paymentDt: paymentInput.paymentDt,
          categoryId: parseInt(paymentInput.categoryId),
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div id='entry-modal'>
      <h2>결제내역 입력</h2>
      <div className='input-group'>
        <PaymentInput
          label='날짜'
          invalid={false}
          onChange={(e) => handleInputChange('paymentDt', e.target.value)}
        />
        <PaymentInput
          label='금액'
          invalid={false}
          onChange={(e) => handleInputChange('price', e.target.value)}
          type='number'
        />
        <PaymentInput
          label='카테고리'
          invalid={false}
          onChange={(e) => handleInputChange('categoryId', e.target.value)}
          type='number'
        />
        <PaymentInput
          label='내용'
          invalid={false}
          onChange={(e) => handleInputChange('content', e.target.value)}
        />
      </div>
      <div className='flex justify-center gap-4 pb-14'>
        <button onClick={handleEntryClick}>등록</button>
        <button onClick={onClose}>취소</button>
      </div>
    </div>
  );
}
