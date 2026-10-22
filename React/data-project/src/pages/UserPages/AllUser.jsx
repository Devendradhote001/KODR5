import UserCard from "../../components/UserCard";
import { fetchUser } from "../../hooks/useAuth";

const AllUser = () => {
  let { data, isPending } = fetchUser();

  if (isPending) return <h1>Loading users...</h1>;

  return (
    <div className="grid grid-cols-2 gap-2">
      {data.users.map((val) => (
        <UserCard key={val.id} user={val} />
      ))}
    </div>
  );
};

export default AllUser;
