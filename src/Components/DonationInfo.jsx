const DonationInfo = ({name, caption, amount}) => {
  return (
    <li className="block p-[10px]">
      <span className="text-[--primary] block font-['Roboto'] font-bold">
        {name} donated ${amount}</span>
        {caption}
    </li>
  );
};

export default DonationInfo;