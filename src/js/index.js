//css
require("./components/amazeui/dist/css/amazeui.css");
require("./components/font-awesome/css/font-awesome.css");

require("../scss/index.scss");

// js
require("expose?React!../../node_modules/react/dist/react.js");
var ReactDOM = require("../../node_modules/react-dom/index.js");
var ReactCSSTransitionGroup = require("../../node_modules/react/lib/ReactCSSTransitionGroup.js");

var data = require("../../mock/list");

var ScrollContent = React.createClass({
    render: function () {
        return (
            <div className="scroll-content move">
                <div className="scroll-left">
                    <div className="head-img-wrap">
                        <i className="elem"></i>
                        <a href="#"></a>
                    </div>
                </div>
                <div className="scroll-right">
                    <div className="nickname">
                        <span>{this.props.nickName}</span>
                    </div>
                    <div className="message">
                        <span>{this.props.children}</span>
                    </div>
                </div>
            </div>
        )
    }
});


var ScrollList = React.createClass({
    reset : function(){
        console.log("ddd");
    },
    getInitialState : function (){
        return {data : data};
    },
    handleClick:function(){
        data.splice(0,1);
        var el = ReactDOM.findDOMNode(this);
        var lists = el.getElementsByClassName("scroll-content");
        for(var i in lists){
            if(lists[i].nodeType == 1){
                lists[i].classList.add("active");
            }
        }
        setTimeout(function(){          // 等动画完成后重置所有的消息的css状态，以便下次继续完成
            lists = el.getElementsByClassName("scroll-content");
            for(var i in lists){
                if(lists[i].nodeType == 1){
                    lists[i].classList.remove("active");
                }
            }
        },500);
        this.setState({data: data});
    },
    render : function(){
        var scrollNodes = this.state.data.map(function(comment){
            return (
                <ScrollContent nickName={comment.nickName} key={comment.id} >
                    {comment.content}
                </ScrollContent>
            );
        });
        return (
            <div>
                <ReactCSSTransitionGroup component="div" transitionName="list" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                {scrollNodes}
                </ReactCSSTransitionGroup>
                <div className="am-btn am-btn-default ctrl-btn" onClick={this.handleClick}>
                    下一条
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <ScrollList />,
    document.getElementById("content")
);