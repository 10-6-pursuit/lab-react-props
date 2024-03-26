const Progress = ({targetAmount, donations}) => {
  
  const currentAmount = donations.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <section className="mb-[25px]">
      <h2 className="md:text-start sm:text-center"> 
        Raised 
        <span className="text-[--secondary]"> ${currentAmount} </span> 
        of 
        <span className="text-[--secondary]"> ${targetAmount}</span>
      </h2>
    </section>
  )
}

export default Progress;
