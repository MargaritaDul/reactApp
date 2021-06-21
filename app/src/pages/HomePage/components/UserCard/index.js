const UserCard = ({ userName, userLastName, userAge }) => {
  return (
    <div>
      <p> Name: {userName} </p>
      <p> Last Name: {userLastName} </p>
      <p> Age: {userAge} </p>
    </div>
  );
};

export default UserCard;
