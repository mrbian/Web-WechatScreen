require("expose?React!../../../node_modules/react/dist/react.js");
var ReactCSSTransitionGroup = require("expose?ReactCSSTransitionGroup!../../../node_modules/react/lib/ReactCSSTransitionGroup.js");

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
    getInitialState : function (){
        return {
            messages : [],
            translate : -172
        };
    },
    addData : function(message){
        var data = this.state.messages.push(message);
        this.setState({
            data: data
        });
    },
    scroll:function(){
        var el = ReactDOM.findDOMNode(this);
        var lists = el.getElementsByClassName("scroll-content");
        var translate = this.state.translate;
        var idx = translate / -172 - 1;
        // 第一次同时移动，之后最后一个就不是同时移动,是因为最后的那个我没有给他们设置初始移动距离，他们是从0移动到设置的值的
        for(var i = 0; i < 5 && i + idx < lists.length;i ++){           // 考虑到性能，只遍历4次
            if(lists[idx + i].nodeType == 1){
                lists[idx + i].style.transform = "translate3d(0px,"+ translate + "px),0px";
                lists[idx + i].style.webkitTransform = "translate3d(0px,"+ translate + "px,0px)";
                lists[idx + i].style.mozTransform = "translate3d(0px,"+ translate + "px,0px)";
                lists[idx + i].style.msTransform = "translate3d(0px,"+ translate + "px,0px)";
            }
        }
        this.setState({
            translate : translate - 172
        });
    },
    render : function(){
        var scrollNodes = this.state.messages.map(function(comment){
            return (
                <ScrollContent nickName={comment.nickName} key={comment.id} >
                    {comment.content}
                </ScrollContent>
            );
        });
        return (
            <div>
                <ReactCSSTransitionGroup component="div" transitionName="list" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
                    {scrollNodes}
                </ReactCSSTransitionGroup>
                <div className="am-btn am-btn-default ctrl-btn" onClick={this.scroll}>
                    下一条
                </div>
            </div>
        );
    }
});

module.exports = ScrollList;