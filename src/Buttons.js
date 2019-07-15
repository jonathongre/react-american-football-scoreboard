import React, { Component } from "react";
import "./App.css";


export default class componentName extends Component {
    render() {
            return ( 
                <section className = "buttons">
                    <div className = "homeButtons"> 
                        <button onClick = { () => this.props.homeScore(this.props.home + 7) } className = "homeButtons__touchdown" > Home Touchdown </button>
                        <button onClick = { () => this.props.homeScore(this.props.home + 3) } className = "homeButtons__fieldGoal" > Home Field Goal </button> 
                    </div>
                    <div className = "awayButtons">
                        <button onClick = { () => this.props.awayScore(this.props.away + 7) } className = "awayButtons__touchdown" > Away Touchdown </button>   
                        <button onClick = { () => this.props.awayScore(this.props.away + 3) } className = "awayButtons__fieldGoal" > Away Field Goal </button>
                    </div > 
                </section>
            );
    }
}