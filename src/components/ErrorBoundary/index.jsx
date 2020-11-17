import React from 'react';
import { NotFoundPage } from '../../pages/404';
import { withRouter } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    state = {
      hasError: false
    };

    // eslint-disable-next-line handle-callback-err
    componentDidCatch (error, info) {
      this.setState({ hasError: true });
    }

    componentDidUpdate (prevProps, prevState) {
      const { location } = this.props;

      if (location !== prevProps.location) {
        this.setState({ hasError: false });
      }
    }

    render () {
      const { hasError } = this.state;
      const { children } = this.props;

      if (hasError) {
        return <NotFoundPage/>;
      }

      return children;
    }
}

export default withRouter(ErrorBoundary);
