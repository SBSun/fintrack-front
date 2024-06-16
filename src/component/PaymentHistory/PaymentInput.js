export default function PaymentInput({ label, valid, ...props }) {
  let labelClasses =
    'text-left block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';

  if (valid) {
    labelClasses += ' text-black-300';
    inputClasses += ' text-black-700 bg-black-300';
  } else {
    labelClasses += ' text-red-400';
    inputClasses += ' text-red-500 bg-red-100 border-red-300';
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
