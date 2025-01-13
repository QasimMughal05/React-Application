import { useRef } from "react";

const Form = () => {
    const formData = useRef(null)
   

    const handleSubmit = (e) => {
        e.preventDefault()
        const username = formData.current.username.value
        const email = formData.current.email.value

        console.log(username, email);

    }
    return(
        <>
        <form ref={formData} onSubmit={handleSubmit}>
            <input type="text" name="username" className="border border-blue-500 mb-2"/><br/>
            <input type="text" name="email" className="border border-blue-500 mb-2"/><br/>
            <button className="border border-blue-500"> Add </button>
        </form>
        </>
    )
}
export default Form;