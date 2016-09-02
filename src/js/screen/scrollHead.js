var ScrollHead = React.createClass({
    getInitialState:function(){
        return {
            info1 : "微信号bln554565808",
            info2 : "关注后发送内容即可上墙",
            count : 0
        }
    },
    updateMessageCount : function(count){
          this.setState({
              count : count
          });
    },
    render: function () {
        return (
        <div id="headWrap" className="headWrap">
            <div>
                <div className="eda-icon">
                    OurEDA
                </div>
                <div className="info">
                    <div className="info-content">
                        <p>{this.state.info1}</p>
                        <p>{this.state.info2}</p>
                    </div>
                    <div className="info-count">
                        <p>{this.state.count}</p>
                        <p>条消息</p>
                    </div>
                </div>
                <div className="qrcode"></div>
                <div className="clearfix"></div>
            </div>
            </div>
        )
    }
});

module.exports = ScrollHead;