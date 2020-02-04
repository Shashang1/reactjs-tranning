import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";
import { Link } from "react-router-dom";

export default class EmojiResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
  };

  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <Link to={`/${this.props.title}`}> 
        <li className="list-group-item ">
          <img alt={this.props.title} src={src} />
          <span className="title">{this.props.title}</span>
        </li>
      </Link>
    );
  }
}

