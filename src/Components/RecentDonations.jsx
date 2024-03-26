import DonationInfo from "./DonationInfo";

const RecentDonations = ({donations}) => {
  
  const listInfo = donations.map(info => {
    return (
      <DonationInfo key={info.id}
      name = {info.name}
      amount = {info.amount}
      caption = {info.caption}
      />
    )
  })

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul className="p-0 list-none">{listInfo}</ul>
    </section>
  )
}

export default RecentDonations;