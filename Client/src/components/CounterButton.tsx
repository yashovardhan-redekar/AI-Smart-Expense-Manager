type CounterButtonProps = {
  onIncrease: () => void;
};

function CounterButton(props: CounterButtonProps) {
  return (
    <button onClick={props.onIncrease}>
      Increase
    </button>
  );
}

export default CounterButton;