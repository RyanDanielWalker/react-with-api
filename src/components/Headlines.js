import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class Headlines extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall())
  }

  render() {
    // We deconstruct the mapped Redux properties from this.props.
    const { error, isLoading, headlines } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
                <h3>{headline.title}</h3>
                <p>{headline.abstract}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

// We'll also need to add mapStateToProps() as well.

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Headlines);