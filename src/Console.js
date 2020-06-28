import React from "react";
import PropTypes from "prop-types";
import "./Console.css";

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character_count: 0,
      line: 0,
      text: [],
      current_history: [],
      current_prompt: "",
      visible_history: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.focus = this.focus.bind(this);

    this.selfRef = React.createRef();
    this.promptRef = React.createRef();
  }

  computeVisibleHistory() {
    let consoleElem = this.selfRef.current;

    let clientHeight = consoleElem.clientHeight;
    let lineHeight = parseInt(
      document.defaultView
        .getComputedStyle(consoleElem, null)
        .getPropertyValue("line-height")
    );

    this.setState({
      visible_history: Math.floor(clientHeight / lineHeight) - 1,
    });
  }

  componentDidMount() {
    this.computeVisibleHistory();

    fetch("./client.php.txt")
      .then((response) => response.text())
      .then((text) => {
        this.setState({ text: text.split(/\r?\n/) });
      });
  }

  focus(e) {
    e.preventDefault();
    this.promptRef.current.focus();

    // we type with the mouse at a faster rate to make clicking and keyboard mashing about equal
    this.typeCode(this.props.typingRate * 5);
  }

  typeCode(characters) {
    if (this.state.text.length === 0) return;

    let count = this.state.character_count;
    let line_step = 1;
    let line = this.state.line;

    if (count + characters >= this.state.text[line].length) {
      let remaining = count + characters - this.state.text[line].length;
      line += line_step;

      while (
        line < this.state.text.length &&
        remaining >= this.state.text[line].length
      ) {
        remaining -= this.state.text[line].length;
        line += line_step;
      }

      this.props.onAddLOC(line - this.state.line);

      if (line >= this.state.text.length) {
        this.setState({
          character_count: remaining,
          line: 0,
          current_history: this.getHistoryText(0),
          current_prompt: this.getPromptText(0, remaining),
        });
      } else {
        this.setState({
          character_count: remaining,
          line: line,
          current_history: this.getHistoryText(line),
          current_prompt: this.getPromptText(line, remaining),
        });
      }
    } else {
      this.setState({
        character_count: count + characters,
        current_prompt: this.getPromptText(line, count + characters),
      });
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.typeCode(this.props.typingRate);
  }

  getPromptText(line, count) {
    if (this.state.text.length > 0) {
      let text = this.state.text[line];

      return text.substring(0, count);
    } else {
      return "";
    }
  }

  getHistoryText(line) {
    if (this.state.text.length > 0) {
      let startline =
        line > this.state.visible_history
          ? line - this.state.visible_history
          : 0;

      return this.state.text.slice(startline, line);
    } else {
      return [];
    }
  }

  render() {
    return (
      <div className="Console" onClick={this.focus} ref={this.selfRef}>
        <div className="History">
          {this.state.current_history.map((text, i) => (
            <div key={i}>{text}&nbsp;</div>
          ))}
          <div className="Prompt">
            {this.state.current_prompt}
            <input
              ref={this.promptRef}
              className="Cursor"
              onChange={this.handleChange}
              value=""
            />
          </div>
        </div>
      </div>
    );
  }
}

Console.propTypes = {
  onAddLOC: PropTypes.func,
  typingRate: PropTypes.number,
};

export default Console;
