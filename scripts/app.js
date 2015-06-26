(function() {
  'use strict';

  var App = React.createClass({
    getInitialState: function() {
      return {
      }
    },

    onChange: function(value) {
      this.setState(value);
    },

    render: function() {
      return (
        React.DOM.div(null,
          React.DOM.h1(null, "Search form", null),
          React.createElement(Form, { onChange: this.onChange }),
          React.createElement(Result, { data: this.state })
        )
      );
    }
  });

  var Form = React.createClass({
    getInitialState: function() {
      return {
        param1: "p1",
        param2: "p2",
        param3: "p3"
      }
    },

    changeHandler: function(e) {
      var newState = {
        param1 : this.refs.param1.getDOMNode().value,
        param2 : this.refs.param2.getDOMNode().value,
        param3 : this.refs.param3.getDOMNode().value
      };
      this.setState(newState);
      this.props.onChange(newState);
    },

    render: function() {
      return (
        React.DOM.form({className: "form"},
          React.DOM.div({className: "row"},
            React.DOM.div({className: "col-xs-12 col-sm-4"},
              React.DOM.div({className: "form-group"},
                React.DOM.label(null, "Param 1"),
                React.DOM.input({className: "form-control", value: this.state.param1, ref: "param1", onChange: this.changeHandler})
              )
            ),
            React.DOM.div({className: "col-xs-12 col-sm-4"},
              React.DOM.div({className: "form-group"},
                React.DOM.label(null, "Param 2"),
                React.DOM.input({className: "form-control", value: this.state.param2, ref: "param2", onChange: this.changeHandler})
              )
            ),
            React.DOM.div({className: "col-xs-12 col-sm-4"},
              React.DOM.div({className: "form-group"},
                React.DOM.label(null, "Param 3"),
                React.DOM.input({className: "form-control", value: this.state.param3, ref: "param3", onChange: this.changeHandler})
              )
            )
          )
        )
      );
    }
  });

  var Result = React.createClass({
    render: function() {
      return (
        React.DOM.h4({className: "result"}, "Result is " + JSON.stringify(this.props.data))
      );
    }
  });

  React.render(React.createElement(App, null), document.getElementById('container'));

})();
