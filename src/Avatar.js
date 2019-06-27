import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';



class Avatar extends Component{
	
	constructor(){

	super();
	this.state = {
	name: "Welcome to Avatr World"
	}
	}
	namechange(){
	this.setState({

		name: "Hello, Preeti Kapoor!!!"

		})
	}
	render() {


	const avatarlistarray = [

				{

					id:1,
					name: "Ankur",
					work: "Web Developer"
				},

				{

					id:2,
					name: "Preeti",
					work: "Web Developer"
				},

				{

					id:3,
					name: "Rajiv",
					work: "Database"
				},
				{

					id:4,
					name: "Shaloo",
					work: "Banker"
				}
			]

			const arrayavatarcard = avatarlistarray.map( (avtarcard, i) => {
			return <Avatarlist key={i} id={avatarlistarray[i].name}
			 				    name={avatarlistarray[i].name} 
			 					work={avatarlistarray[i].work} />
			})
			
	return ( 
		<div className="mainpage">
				 <h1>{this.state.name}</h1>
				 {arrayavatarcard}
				 <button onClick= { () => this.namechange() }>Subscribe</button>
				</div>		
				)

	}

}
		

export default Avatar;