import React from 'react';
import styles from './contact.module.css';

export default class ContactWithForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            subject: '',
            message: ' ',
            gotcha: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        e.preventDefault();
        if (this.state.firstName === '') {
            alert('First name is required');
        } else if (this.state.lastName === '') {
            alert('Last name is required');
        } else if (this.state.emailAddress === '') {
            alert('Email address is required');
        } else if (!emailRegex.test(this.state.emailAddress)) {
            alert('Please enter a valid email');
        } else if (this.state.subject === '') {
            alert('Subject is required');
        } else if (this.state.message === '') {
            alert ('Message is required');
        } else {
            (() => {
                fetch('https://formspree.io/spencercorwin@icloud.com', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {
                        name: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.emailAddress,
                        subject: this.state.subject,
                        message: this.state.message,
                        _gotcha: this.state.gotcha
                    }
                })
                .then(() => {
                    console.log('Got response');
                })
            })();
            /*
            this.setState({
                firstName: '',
                lastName: '',
                emailAddress: '',
                subject: '',
                message: ' '
            })*/
            alert('There was an error submitting the form. Please use the direct email link.');
        }
    }

    render() {
        return (
            <>
                <p>If you would like to contact me please email me at <a href="mailto:spencercorwin@icloud.com">spencercorwin@icloud.com</a> or use the form below.</p>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <div className={styles.flexbox}>
                        <div className={styles.flexitem}>
                            <label className={styles.label}>First Name<sup>*</sup></label>
                            <input className={styles.input} required type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
                        </div>
                        <div className={styles.flexitem}>
                            <label className={styles.label}>Last Name<sup>*</sup></label>
                            <input className={styles.input} required type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <label className={styles.label}>Email Address<sup>*</sup></label>
                        <input className={styles.input} required type="text" name="emailAddress" value={this.state.emailAddress} onChange={this.handleInputChange}/>
                    </div>
                    <div className={styles.container}>
                        <label className={styles.label}>Subject<sup>*</sup></label>
                        <input className={styles.input} required type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange}/>
                    </div>
                    <div className={styles.container}>
                        <label className={styles.label}>Message<sup>*</sup></label>
                        <textarea className={styles.textarea} required type="text" name="message" value={this.state.message} onChange={this.handleInputChange}/>
                        <input style={{display: 'none'}} type="text" name="gotcha" value={this.state.gotcha} onChange={this.handleInputChange} />
                    </div>
                    <button className={this.props.dark ? styles.submitbuttonlight : styles.submitbuttondark} type="submit">Submit</button>
                </form>
            </>
        )
    }
}