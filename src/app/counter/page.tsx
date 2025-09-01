import Counter from "./counter";

export const metadata = {
  title: "Counter",
  description: "This is the Counter Description",
};

const CounterHome = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Counter />
    </div>
  );
};

export default CounterHome;
