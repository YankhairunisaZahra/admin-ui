const Card = ({ title = false, desc = "", variant = "" }) => {
  return (
    <div className={`flex flex-col flex-1 mb-6 ${variant}`}>
      {title && (
        <div className="text-lg text-gray-02 mb-4">
          {title}
        </div>
      )}
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
        {desc}
      </div>
    </div>
  );
};

export default Card;
