import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import inspirations from "../inspirations/inspirations.js";

export default class InspirationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fineArt: false,
      game: false,
      literature: false,
      movie: false,
      music: false,
      tv: false
    }
  }

  toggleFineArt = () => {
    let current = !this.state.fineArt;

    this.setState(() => ({fineArt : current}));
  }

  toggleGame = () => {
    let current = !this.state.game;

    this.setState(() => ({game : current}));
  }

  toggleInvert = () => {
    let currentFA = this.state.fineArt;
    let currentGame = this.state.game;
    let currentLit = this.state.literature;
    let currentMov = this.state.movie;
    let currentMus = this.state.music;
    let currentTV = this.state.tv;

    this.setState(() => ({
      fineArt: !currentFA,
      game: !currentGame,
      literature: !currentLit,
      movie: !currentMov,
      music: !currentMus,
      tv: !currentTV
    }))
  }

  toggleLiterature = () => {
    let current = !this.state.literature;

    this.setState(() => ({literature : current}));
  }

  toggleMovie = () => {
    let current = !this.state.movie;

    this.setState(() => ({movie : current}));
  }

  toggleMusic = () => {
    let current = !this.state.music;

    this.setState(() => ({music : current}));
  }

  toggleTV = () => {
    let current = !this.state.tv;

    this.setState(() => ({tv : current}));
  }

  render() {
    return (
      <div className="content-container__inspiration">
        <div className="inspiration-page">
          <div className="inspiration-header">
            <Link className="fa-button" to="me"><FontAwesome name="arrow-circle-left"/></Link>
            <h1>Wall of Inspiration</h1>
          </div>
          <div className="inspiration-selectors">
            <div className="inspiration-selectors__choices">
              {<a className="inspiration-button" onClick={this.toggleFineArt}><div className={`fineArt-button${this.state.fineArt ? "__selected" : "__unselected"}`}></div>Fine Art</a>}
              {<a className="inspiration-button" onClick={this.toggleGame}><div className={`game-button${this.state.game ? "__selected" : "__unselected"}`}></div>Game</a>}
              {<a className="inspiration-button" onClick={this.toggleLiterature}><div className={`literature-button${this.state.literature ? "__selected" : "__unselected"}`}></div>Literature</a>}
              {<a className="inspiration-button" onClick={this.toggleMovie}><div className={`movie-button${this.state.movie ? "__selected" : "__unselected"}`}></div>Movie</a>}
              {<a className="inspiration-button" onClick={this.toggleMusic}><div className={`music-button${this.state.music ? "__selected" : "__unselected"}`}></div>Music</a>}
              {<a className="inspiration-button" onClick={this.toggleTV}><div className={`tv-button${this.state.tv ? "__selected" : "__unselected"}`}></div>TV</a>}
            </div>
            <div className="inspiration-selectors__invert" onClick={this.toggleInvert}>
              <a className="inspiration-invert-button"><FontAwesome className="fa-invert" name="adjust"/>Invert Selection</a>
            </div>
          </div>
          <div className="inspiration-container">
          {inspirations.map( item => {
            const className = `inspiration ${item.genre}${this.state[item.genre] ? "__selected" : ""}`;
            return <div className={className} key={item.name}>
                    {item.name}
                </div>
          })}
          </div>
        </div>
      </div>
    )
  }
}