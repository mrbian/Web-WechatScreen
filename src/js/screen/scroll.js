var ScrollList = require("./scrollList.js");
var ScrollHead = require("./scrollHead.js");

var Scroll = React.createClass({
    getInitialState : function(){
        return {
            count : 0
        }
    },
    componentDidMount : function(){
    },
    addData : function(data){
        this._scrollList.addData(data);
        var length = this._scrollList.state.messages.length;
        this._scrollHead.updateMessageCount(length);
    },
    render : function(){
        return (
            <div>
                <ScrollHead ref={(s) => this._scrollHead = s} />
                <ScrollList ref={(s) => this._scrollList = s} />
            </div>
        );
    }
});

module.exports = Scroll;