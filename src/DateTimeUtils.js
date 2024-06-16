/**
 * 주어진 Date 객체를 'yyyy-MM-DD' 형식으로 변환하는 함수
 * @param {Date} date - 변환할 Date 객체
 * @returns {string} yyyy-MM-DD 형식의 날짜 문자열
 */
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getCurrentDateTime = () => {
  const offset = 1000 * 60 * 60 * 9;
  const koreaNow = new Date(new Date().getTime() + offset);
  return koreaNow.toISOString().substring(0, 16);
};
