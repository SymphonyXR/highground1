interface MenuItemProps {
  title: string;
  onClick: () => void;
}

export const MenuItem = ({ title, onClick }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white hover:text-gray-300 transition-colors"
    >
      {title}
    </button>
  );
};