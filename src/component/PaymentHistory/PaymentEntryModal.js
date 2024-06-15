import axios from 'axios';

export default function PaymentEntryModal({ paymentInput, onChange, onClose }) {
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
        onClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div id='entry-modal'>
      <h2>결제내역 입력</h2>
      <div className='input-group'>
        <p>
          <label>날짜</label>
          <input
            value={paymentInput.paymentDt}
            onChange={(e) => onChange('paymentDt', e.target.value)}
          />
        </p>
        <p>
          <label>금액</label>
          <input
            value={paymentInput.price}
            onChange={(e) => onChange('price', e.target.value)}
            type='number'
          />
        </p>
        <p>
          <label>카테고리</label>
          <input
            value={paymentInput.categoryId}
            onChange={(e) => onChange('categoryId', e.target.value)}
            type='number'
          />
        </p>
        <p>
          <label>내용</label>
          <input
            value={paymentInput.content}
            onChange={(e) => onChange('content', e.target.value)}
          />
        </p>
      </div>
      <p>
        <button onClick={handleEntryClick}>등록</button>
      </p>
      <p>
        <button onClick={onClose}>취소</button>
      </p>
    </div>
  );
}
