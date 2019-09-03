const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;

const hello = `
**Hi :)**

My name is Michael Jonathan.

I'm currently working as a front-end developer at [Airwallex](https://www.airwallex.com)'s Melbourne office.

I don't currently have stuff to post here. 😅

You can find me on [LinkedIn](https://www.linkedin.com/in/mjonathan) instead.
`

class Index extends React.Component {
  render() {
    const {config: siteConfig} = this.props;

    return (
      <div className="mainContainer">
        <Container>
          <MarkdownBlock>{hello}</MarkdownBlock>
        </Container>
      </div>
    );
  }
}

module.exports = Index;
