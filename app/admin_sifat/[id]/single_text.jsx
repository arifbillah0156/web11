export default function Text({ text, value }) {
  return (
    <div>
      <p className="font-semibold text-gray-800 text-xl">{text}:</p>
      <p className="text-gray-700 text-lg">{value}</p>
    </div>
  );
}
