import React from 'react';
import { userActions } from '../actions/UserActions';

class CreateAccount extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            user:{
                firstName: ' ',
                lastName: ' ',
                userhome: ' ',
                password:' '
            },
            submitted: false
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.setState({ submitted: true});
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true});
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }




    render(){
        const { user, submitted } = this.state;
        return(
            <div>
                <form>
                    <div className="">
                        <input 
                        placeholder="first name" 
                        name="firstName" />
                    </div>
                    <div className="">
                        <input 
                        placeholder="last name" 
                        name="firstName" />
                    </div>
                    <div className="">
                        <input 
                        placeholder="email" 
                        name="firstName" />
                    </div>
                    <div className="">
                        <input 
                        placeholder="password" 
                        name="firstName" />
                    </div>
                    <div>
                        <button>restaurantour</button>
                    </div>
                    <div>
                        <button>im hungry!!</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateAccount;