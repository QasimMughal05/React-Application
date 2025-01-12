import { useReducer } from "react";

const FormExm = () => {
    const formReducer = (state, action) => action.type === 'set' ? { ...state, ...action } : state
    const [formdata, setFormData] = useReducer(formReducer, {
        Name: '',
        Age: ''
    })
    return (
        <>
            <div>
                <h1>{formdata.Name}</h1>
                <h1>{formdata.Age}</h1>
                <form>
                    <input type="text" placeholder="Name"
                        value={formdata.Name}
                        onChange={(e) => setFormData({
                            type: "set",
                            Name: e.target.value
                        })} />
                    <input type="number" min="0" max="80" placeholder="Age "
                        value={formdata.Age}
                        onChange={(e) => setFormData({
                            type: "set", Age: e.target.value
                        })} /><br />
                    <button>Add</button>
                </form>
            </div>

        </>
    )
}
export default FormExm;