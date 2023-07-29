interface IButton {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: IButton) => {
  return (
    <button className="btn-show-modal" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
