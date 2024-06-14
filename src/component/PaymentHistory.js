import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HEADERS } from '../data';
import DataTable from './table/DataTable';
import '../css/table.css';

const HistoryList = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selection, setSelection] = useState([]);

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

  // items를 가공하여 필요한 데이터만 전달
  const items = payments.map((payment) => ({
    paymentDt: payment.paymentDt,
    categoryName: payment.categoryName,
    price: payment.price,
    content: payment.content,
  }));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <DataTable
        headers={HEADERS}
        items={items}
        selectable={true}
        updateSelection={setSelection}
      />
    </>
  );
};

export default HistoryList;
