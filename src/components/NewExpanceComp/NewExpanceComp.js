import './NewExpanceComp.css';
const NewExpanceComp = () => {
    return (
        <div className="NewExpanceComp">
                <input type="Date" className="inputField date" />
                <input type="Number" placeholder="Amount" className="inputField amount" />
                <input type="text" placeholder="Title" className="inputField title" />
                <textarea cols="30" rows="10" placeholder="Description" className="inputField description"></textarea>
                <button className="button newExpanceButton"> NEW EXPANCE </button>
        </div>
    );
 };

export default NewExpanceComp;