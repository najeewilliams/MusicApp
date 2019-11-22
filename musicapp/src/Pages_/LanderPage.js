import React from 'react';
import CreateAccount from '../tools_/CreateAccount';


// import CreateAccount from '../tools/CreateAccount';
// import Login from '../tools/Login';
// this is the lander page where the login, home, and the create account (step1 goes)

export class LanderPage extends React.Component {
    render() {
        return (
            <div className="landing-container">
                {/* <CreateAccount />
                <Login /> */}
                <h1>Flava lorem ipsem</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <CreateAccount/>

                <section className="middle-content">
                    <div class="cards">
                        <h3>Flava</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>Sign Up</button>
                    </div>
                    <div class="cards">
                        <h3>Flava</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>Sign Up</button>
                    </div>
                    <div class="cards">
                        <h3>Flava</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button>Sign Up</button>
                    </div>
                </section>
                <section className="bottom-content">
                    <h3>How it works</h3>
                </section>
            </div>
        );

    }
}

export default LanderPage;