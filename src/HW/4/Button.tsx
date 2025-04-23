type ButtonPropsType = {
  callBack: () => void
  name: string
};

export const Button = ({callBack, name}: ButtonPropsType) => {
  const callBackHandler = () => {
    callBack()
    // НУЖНО ДОПИСАТЬ
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {name}
    </button>
  );
};
