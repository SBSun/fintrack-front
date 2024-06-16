import { useState } from 'react';
import axios from 'axios';
import PaymentInput from './PaymentInput';
import { getCurrentDateTime } from '../../DateTimeUtils';
import CategorySelectBox from './CategorySelectBox';

export default function PaymentEntryModal({ onClose }) {
  const [paymentInput, setPaymentInput] = useState({
    content: '',
    price: '',
    paymentDt: getCurrentDateTime(),
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
    const [date, time] = paymentInput.paymentDt.split('T');
    const formattedTime = `${time}:00`;
    const formattedDateTime = `${date} ${formattedTime}`;

    axios
      .post(
        'https://fintrack.site/payments',
        {
          content: paymentInput.content,
          price: parseInt(paymentInput.price),
          paymentDt: formattedDateTime,
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

  // 유효성 검사
  const paymentDtValid = paymentInput.paymentDt.trim().length !== 0;
  const priceValid =
    paymentInput.price.trim().length !== 0 &&
    !isNaN(paymentInput.price) &&
    Number(paymentInput.price) > 0;
  const categoryIdValid = paymentInput.categoryId !== 0;
  const contentValid = paymentInput.content.trim().length !== 0;

  return (
    <div id='entry-modal'>
      <h2>결제내역 입력</h2>
      <div className='input-group'>
        <PaymentInput
          label='날짜'
          valid={paymentDtValid}
          value={paymentInput.paymentDt}
          onChange={(e) => handleInputChange('paymentDt', e.target.value)}
          type='datetime-local'
        />
        <PaymentInput
          label='금액'
          valid={priceValid}
          onChange={(e) => handleInputChange('price', e.target.value)}
          type='number'
        />
        <CategorySelectBox
          label='카테고리'
          valid={categoryIdValid}
          onChange={(e) => handleInputChange('categoryId', e.target.value)}
        />
        <PaymentInput
          label='내용'
          valid={contentValid}
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
