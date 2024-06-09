import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HistoryList.css';

const HistoryList = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const date = new Date();
        const response = await axios.get(
          `https://fintrack.site/payments/monthly?year=${date.getFullYear()}&month=${
            date.getMonth() + 1
          }`,
          {
            withCredentials: true,
          }
        );
        if (response.data.status === 200) {
          setPayments(response.data.list);
        } else {
          setError('Error fetching data');
        }
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className='history-list'>
      <h1>결제 내역</h1>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>카테고리</th>
            <th>내용</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.paymentSeq}>
              <td>{payment.paymentDt}</td>
              <td>{payment.categoryName}</td>
              <td>{payment.content}</td>
              <td>{payment.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default HistoryList;
