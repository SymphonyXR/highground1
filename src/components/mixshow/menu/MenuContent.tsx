interface MenuContentProps {
  title: string;
  content: string;
}

export const MenuContent = ({ title, content }: MenuContentProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-300">{content}</p>
    </>
  );
};