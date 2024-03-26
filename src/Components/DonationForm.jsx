//Need a prop for name, caption, and amount inputs
const DonationForm = ({donations}) => {
  const updatedDonationPosition = donations.length + 1;
  return (
    <section className="donation-form">
      <h3 className="mb-2 md:text-start sm:text-center">You could be donation
        <span className="text-[--secondary]"> #{updatedDonationPosition}!</span>
      </h3>
      <form>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            className="block my-[10px] mx-0 p-[5px]"
            type="text" 
            id="name" 
            name="name" 
            placeholder="Your name..." 
            required
          />
        </div>
        <div className="caption">
          <label htmlFor="caption">Caption</label>
          <input
            className="block my-[10px] mx-0 p-[5px]"
            type="text" 
            id="caption" 
            name="caption" 
            placeholder="Add a brief message..." 
            required/>
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount</label>
          <input
            className="block my-[10px] mx-0 p-[5px]"
            type="text" 
            id="amount" 
            name="amount" 
            placeholder="$0"
            required/>
        </div>
        <button className="bg-gradient-to-r from-[#2FB59E] to-[#2386CE] font-bold outline-none px-4 py-2 text-center rounded-md">
          Donate!
        </button>
      </form>
    </section>
  )
}

export default DonationForm;