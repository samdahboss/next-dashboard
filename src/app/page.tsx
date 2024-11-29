import LikeBtn from "./likeBtn";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }): JSX.Element => {
  return <h1>{title ? title : "Default title"}</h1>;
};

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  return (
    <div>
      <Header title='Develop. Preview. Ship.' />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeBtn/>
    </div>
  );
}
