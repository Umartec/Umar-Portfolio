// @flow strict
function ServiceCard({ title, description }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg p-5">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#d3d8e8] text-sm">{description}</p>
    </div>
  );
}

export default ServiceCard;
    