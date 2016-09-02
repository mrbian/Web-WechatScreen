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
            translate : -172,
            updated : false
        };
    },
    addData : function(message){
        var msgArr = this.state.messages;
        msgArr.push(message);
        this.setState({
            messages : msgArr
        });
    },
    /**
     * 滚动函数
     *
     * 问题记录：
     * - 第一个问题：第一次它们同时移动，之后就不是同时移动,是因为最后的那个我没有把它移动到第四个位置，他们是从0移动到设置的值的
     * - 第二个问题：有最新的消息时，最新的那个没有初始化的transform
     */
    scroll:function(){
        var el = ReactDOM.findDOMNode(this);
        var lists = el.getElementsByClassName("scroll-content");
        var translate = this.state.translate;
        var idx = translate / -172 - 1;
        if(idx === lists.length - 4){      // 如果最后一个数据是最新的且需要移动
            console.log("最后一个");
            window.getComputedStyle(lists[lists.length - 1]);  // 设置生效
        }
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
        <div id="content" className="contentWrap">
                <ReactCSSTransitionGroup transitionAppear={true} component="div" transitionName="list" transitionEnterTimeout={800} transitionLeaveTimeout={800}>
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