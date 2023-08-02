const PersonForm = (props) =>{
    return(
      <div className="parent-addPerson">
        <form className="addPerson">
        <div>  <input  onChange={props.handleNote} placeholder='Name'  /> </div> 
        <div>  <input onChange={props.handleNumber} placeholder= 'Number' /> </div>
        <div> <button type="submit" onClick={props.NameNumber}>Add Contact</button> </div>
      </form>
      </div>
    )
}
// the first div creates the 'name:' and input field that uses the onChange method which takes in a placeholder for how it's going to be handled called handleNote
// the second div creates the 'number:' and input field that uses the onChange method which takes in a placeholder for how it's going to be handled called handleNumber
// the third div creates a button that uses the onClick method which takes in a placeholder for how it's going to be handled called NameNumber
export default PersonForm