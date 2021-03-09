import React from 'react';

const withToggle = (Component) => {
  return class WithToggle extends React.Component {
    constructor(props) {
      // STATE
      super(props);
      this.state = {
        isOpen: false,
      };
    }

    // STATE TOGGLE FUNCTIOANLITY
    toggle = () => {
      this.setState((prevState) => ({
        isOpen: !prevState.isOpen,
      }));
    };

    render() {
      const newProps = {
        isOpen: this.state.isOpen,
        toggle: this.toggle,
      };
      return <Component {...newProps} {...this.props} />;
    }
  };
};

export default withToggle;

// const withToggle = (prop) => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default withToggle
