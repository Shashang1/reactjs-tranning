import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

export default class EmojiResults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array
  };

  render() {
    return (
      <div className="component-emoji-results">
        <ul className="list-group">
          {this.props.emojiData.map(emojiData => (
            <EmojiResultRow
              key={emojiData.title}
              symbol={emojiData.symbol}
              title={emojiData.title}
              click={this.props.click}
            />
          ))}
        </ul>
      </div>
    )
  }
}

