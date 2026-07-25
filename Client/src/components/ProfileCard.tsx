import "./ProfileCard.css";

type ProfileCardProps = {
  name: string;
  branch: string;
  year: string;
  cgpa: number;
  skills: string;
};

function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>
        <strong>Branch:</strong> {props.branch}
      </p>

      <p>
        <strong>Year:</strong> {props.year}
      </p>

      <p>
        <strong>CGPA:</strong> {props.cgpa}
      </p>

      <p>
        <strong>Skills:</strong> {props.skills}
      </p>

      <button className="btn">
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;