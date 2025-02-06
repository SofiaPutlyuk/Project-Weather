import React from "react";
import { SendInfo } from "./SendInfo";
import { AiOutlineClose } from "react-icons/ai";
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.reset = this.reset.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault()
        const { name, email, password } = this.state;

        if (!name.trim() || !email.trim() || !password.trim()) {
            alert("Заповніть всі поля!");
            return;
        }else {
            SendInfo({ name, email, password });
            alert("Реєстрація успішна!");
            this.reset();
            
        }
    }
    reset(){
        this.setState({
            name: "",
            email: "",
            password: "",
            isModalOpen: false,
        })
        
        this.props.onClose();
    }
    render() {
        return (
            <div className="modal-overlay">
            <div className="modal">
            <AiOutlineClose className="cross" onClick={this.reset}/>
            <p className="title-modal">Sign up</p>
            <form onSubmit={this.handleSubmit} className="container-input">
                <label>
                    <p className="label-text">Username</p> 
                    <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        value={this.state.name}
                        onChange={this.handleChange}
                        className="input-modal"
                    />
                </label>
                <label>
                    <p className="label-text">E-Mail</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-Mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="input-modal"
                    />
                </label>
                <label>
                    <p className="label-text">Password</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className="input-modal"
                    />
                </label>
                <button type="submit" onClick={this.handleSubmit} className="sign-button">Sign up</button>
            </form>
            <p className="text-login">Already have an account? Log In</p>
        </div>
            </div>
        )
    }
}
export default Modal;
