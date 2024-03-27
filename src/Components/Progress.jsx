export default function Progress({targetAmount, donations}) {
  let currentTotal = donations.reduce((acc, donor) => acc + parseInt(donor.amount),0)
  return (
    <section className="progress">
      <h2>Raised <span className="secondary">${currentTotal}</span> of <span className="secondary">{targetAmount}</span></h2>
    </section>
  )
}
