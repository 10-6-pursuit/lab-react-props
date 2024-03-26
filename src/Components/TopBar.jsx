export default function TopBar() {
  return (
    <header className="bg-[--dark] border-b-[3px] border-[--primary] text-[--light] text-center py-6">
      <h1 className="text-[42px] font-light">
        GoFund
        <span className="text-[--primary] font-bold">     Me</span>
      </h1>
      <p className="italic">Help me go on a vacation to a beach somewhere!</p>
    </header>
  );
}
