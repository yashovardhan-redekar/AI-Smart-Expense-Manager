type Studentprops = {
  name: string;
  branch: string;
  cgpa: number;
};

function Student({ name, branch, cgpa }: Studentprops) 
{ 
    return (
        <>
        <h2>Name = {name} </h2>
        <h2>Branch = {branch} </h2>
        <h2>CGPA = {cgpa} </h2>
        </>
    );
}
export default Student;