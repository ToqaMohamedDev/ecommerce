import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}
const Title = ({ text, className }: Props) => {
  const newClassName = twMerge("text-2xl  sm:text-4xl font-bold", className);
  return <h2 className={newClassName}>{text}</h2>;
};

export default Title;
/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/ecommerce.git
git push -u origin main
*/