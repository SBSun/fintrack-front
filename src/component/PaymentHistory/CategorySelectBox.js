const CATEGORIES = [
  { value: 1, name: '식비' },
  { value: 2, name: '교통/차량' },
  { value: 3, name: '문화생활' },
  { value: 4, name: '마트/편의점' },
  { value: 5, name: '패션/미용' },
  { value: 6, name: '생활용품' },
  { value: 7, name: '주거/통신' },
  { value: 8, name: '건강' },
  { value: 9, name: '교육' },
  { value: 10, name: '경조사/회비' },
  { value: 11, name: '가족' },
  { value: 12, name: '기타' },
];

export default function CategorySelectBox({ label, valid, onChange }) {
  let labelClasses =
    'text-left block mb-2 text-xs font-bold tracking-wide uppercase';

  if (valid) {
    labelClasses += ' text-black-300';
  } else {
    labelClasses += ' text-red-400';
  }

  return (
    <p>
      <label className='labelClasses'>{label}</label>
      <select
        className='w-full px-3 py-2 leading-tight border rounded shadow'
        onChange={onChange}
      >
        {CATEGORIES.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </p>
  );
}
