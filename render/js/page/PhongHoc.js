function SideBarButton(props) {
    var type = props.type;
    if (!type) {
        type = "button";
    }
    switch (type) {
        case "button":
            var on = props.on;
            if (!props.on) on = "";
            else on = "on";

            if (props.title) {
                return (
                    <div
                        className={"action-button"}
                        onClick={() => {
                            props.onClick();
                        }}
                    >
                        <div className="action-button-svg">
                            <ion-icon name={props.nameIcon}></ion-icon>
                        </div>
                        <div className="action-button-text">
                            <p>{props.title}</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div
                        className={"action-button"}
                        onClick={() => {
                            props.onClick();
                        }}
                    >
                        <div className="action-button-svg">
                            <ion-icon name={props.nameIcon}></ion-icon>
                        </div>
                    </div>
                );
            }

        case "radio":
            var buttonSeleStyleTemplay = {
                "border-left": "3px solid rgb(98, 0, 255)",
            };
            var on = props.on;
            if (!props.on) on = "";
            else on = "on";

            if (props.onStyle) buttonSeleStyleTemplay = props.onStyle;

            var buttonSeleStyle = {};

            Object.keys(buttonSeleStyleTemplay).forEach((e) => {
                var str = e;
                var index = e.indexOf("-");
                if (e.indexOf("-") != -1) {
                    var newRp = str.charAt(index + 1).toUpperCase();
                    str = str.replace(`-${str.charAt(index + 1)}`, newRp);
                }
                buttonSeleStyle[str] = buttonSeleStyleTemplay[e];
            });

            const clasId = makeid(6);
            const handlOnClick = function () {
                const ele = document.querySelector(".action-button.radio." + clasId);
                const parent = ele.parentElement;
                parent.querySelectorAll(".radio").forEach((e) => {
                    e.classList.remove("on");
                    e.style = {};
                });

                ele.classList.add("on");

                Object.keys(buttonSeleStyle).forEach((e) => {
                    ele.style[e] = buttonSeleStyle[e];
                });
            };
            var propsIcon = {
                name : props.nameIcon
            }

            if (props.srcIcon) {
                propsIcon = {
                    src: props.srcIcon
                }
            }

            if (props.title) {
                return (
                    <div className={"action-button radio " + on + " " + clasId} style={props.on ? buttonSeleStyle : {}} onClick={() => {handlOnClick();props.onClick();}}>
                        <div className="action-button-svg">
                            <ion-icon {...propsIcon}></ion-icon>
                        </div>
                        <div className="action-button-text">
                            <p>{props.title}</p>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className={"action-button radio " + on + " " + clasId} style={props.on ? buttonSeleStyle : {}} onClick={() => { handlOnClick(); props.onClick();}} >
                        <div className="action-button-svg">
                            <ion-icon {...propsIcon}></ion-icon>
                        </div>
                    </div>
                );
            }

        case "check":
            var on = props.on;
            const styleOnCheck = props.onStyle;
            const id = makeid(6);
            return (
                <div
                    className="action-button "
                    style={on ? {} : styleOnCheck}
                    id={id}
                    onClick={() => {
                        const ele = document.getElementById(id);
                        if (!on) {
                            on = !on;
                            ele.style = {};
                            props.onClick(false);
                        } else {
                            on = !on;
                            Object.keys(styleOnCheck).forEach((e) => {
                                ele.style[e] = styleOnCheck[e];
                            });
                            props.onClick(true);
                        }
                    }}
                >
                    <div className="action-button-svg">
                        <ion-icon name={props.nameIcon}></ion-icon>
                    </div>
                </div>
            );
    }
}

function BaiTap(props) {
    const classttn = props.classttn;
    return (
        <React.Fragment>
            <div className="div-cauhoi">
                <div className="cauhoi">
                    <span className="stt">C??u 1</span>
                    <span id="noidungcauhoi"></span>
                </div>

                <div className="dapan">
                    <div className="dapan-A dp" onClick={() => classttn.changeCauChon()}>
                        <input type="radio" name="gr-dapan" id="dapan-A" />
                        <label htmlFor="dapan-A">
                            <div className="hed">A</div>
                            <div className="noidung" id="noidung-da-A"></div>
                        </label>
                    </div>
                    <div className="dapan-B dp" onClick={() => classttn.changeCauChon()}>
                        <input type="radio" name="gr-dapan" id="dapan-B" />
                        <label htmlFor="dapan-B">
                            <div className="hed">B</div>
                            <div className="noidung" id="noidung-da-B"></div>
                        </label>
                    </div>
                    <div className="dapan-C dp" onClick={() => classttn.changeCauChon()}>
                        <input type="radio" name="gr-dapan" id="dapan-C" />
                        <label htmlFor="dapan-C">
                            <div className="hed">C</div>
                            <div className="noidung" id="noidung-da-C"></div>
                        </label>
                    </div>
                    <div className="dapan-D dp" onClick={() => classttn.changeCauChon()}>
                        <input type="radio" name="gr-dapan" id="dapan-D" />
                        <label htmlFor="dapan-D">
                            <div className="hed">D</div>
                            <div className="noidung" id="noidung-da-D"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div className="bottom-key">
                <div className="bottom-key-timer">
                    <ion-icon name="hourglass-outline"></ion-icon>
                    <p id="bottom-timer">20p 30s</p>
                </div>
                <div className="bottom-key-contro-key">
                    <div className="bottom-button" onClick={() => classttn.backSlide()}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="bottom-button">
                        <ion-icon name="help-outline"></ion-icon>
                    </div>
                    <div className="bottom-button" onClick={() => classttn.nextSlide()}>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
                <div className="bottom-key-dalam">
                    <ion-icon name="checkmark-outline"></ion-icon>
                    <p id="bottom-dalam">20/30</p>
                </div>
            </div>
        </React.Fragment>
    );
}

function BaiHoc() {
    return (
        <div className="phonghoc-content-bottom-content" id="noidungbaihoc"></div>
    );
}

function SideBar(props) {
    const classhtt = props.classhtt
    const eventSideBar = classhtt.handlSideBar;
    var fileButton = classhtt.tabFileData

    console.log(fileButton)

    return (
        <React.Fragment>
            <div className="action-top">
                <SideBarButton type="radio" on={classhtt.tabActive == 0} nameIcon="book-outline" title="L?? thuy???t" onClick={() => {classhtt.tabActive = 0; eventSideBar.baiHoc()}}/>
                <SideBarButton type="radio" on={classhtt.tabActive == 1} nameIcon="videocam-outline" title="Live" onClick={() => {classhtt.tabActive = 1}}/>
                <SideBarButton type="radio" on={classhtt.tabActive == 2} nameIcon="create-outline" title="B??i t???p" onClick={() => {classhtt.tabActive = 2; eventSideBar.baiTap()}} />
                {fileButton.map((e, index) => (
                    <SideBarButton key={index} type="radio" on={classhtt.tabActive == e.index} srcIcon={e.iconSrc} onClick={() => {classhtt.tabActive = e.index;classhtt.renderFileView(e.url , e.iconSrc , e.name)}}/>
                ) )}
            </div>
            <div className="action-botton">
                <SideBarButton
                    nameIcon="chevron-forward-outline"
                    type="check"
                    on={eventSideBar.isSideBar()}
                    onStyle={{ transform: "rotate(180deg)" }}
                    onClick={eventSideBar.chatOnOff}
                />
                <SideBarButton nameIcon="log-out-outline" onClick={eventSideBar.out} />
            </div>
        </React.Fragment>
        
    );
}

function MenuButton(props) {
    return (
        <div className="list-menu-button" onClick={() => { props.onClick(); }}>
            <ion-icon name={props.iconName}></ion-icon>
            <p className="list-menu-title">{props.title}</p>
        </div>
    );
}

function Menu(props) {
    return (
        <div className="list-menu">
            {props.data.map((e, index) => (
                <MenuButton key={index} {...e} />
            ))}
        </div>
    );
}

function SideBarLoading() {
    return (
        <div className="list-lop-center">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

function ListLop(props) {

    var data = props.data;

    const countOnline = data[1].filter(e => e.Online).length
    return (
        <div className="list-lop">
            <div className="list-lop-title">
                <p className="list-lop-name">
                    {data[0]} - {countOnline}\{data[1].length}
                </p>

                <div className="list-lop-icon">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>

            </div>

            <div className="list-lop-view">
                {data[1].map((e , index) => {
                    var pli = e.HoTen.split(' ')
                    var name = `${pli[pli.length - 2]} ${pli[pli.length - 1]}`
                    return(
                        <div key={index} className={`list-hocsinh ${e.Online ? 'online' : ''}`}>
                            <p className="hocsinh-stt-name">{index + 1} - {name}</p>
                            <div className="hocsinh-status"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    
}

function ListHocSinh(props) {
    var data = props.data;

    data = Object.entries(data)

    return (
        <div className="list-hoc-sinh">
            {data.map((e, index) => <ListLop key={index} data={e}/>)}
        </div>
    )
}

function ChatEle(props) {
    if (props.name){

        
        var names = props.name.split(' ')   
        
        return (
            <div className={`chat-mess ${props.me ? 'me': ''}`} style={{'marginTop': '10px'}}>
                <div className="chat-mess-name">
                    {names[names.length - 2]} {names[names.length - 1]}
                </div>
                <div className="chat-mess-body">
                    {props.mess}    
                </div>
            </div>
        );
    }
    else 
        return (
            <div className={`chat-mess ${props.me ? 'me': ''}`}>
                <div className="chat-mess-body">
                    {props.mess}
                </div>
            </div>
        );
    

}

function ChatBody(props) {
    var chats = props.data
    // chats.reverse()
    return (
        <React.Fragment>
            {chats.map((e , index) => {
                console.log(e)
                var name = e.HoTen
                // console.log(index - 1)
                if (index > 0) {
                    if (e.HocSinhID == chats[index - 1].HocSinhID)
                        name = null
                }

                const me = e.HocSinhID == User.HocSinhID

                return (
                    <ChatEle key={index} me={me} mess={e.Comment} name={name} thoiGiam={e.ThoiGianChat}/>
                )
            })}
        </React.Fragment>
    )
}

function ChatPage(props) {

    return (
        <div className="chat-main">
            <div className="chat-body" id="chat-mess-body">
                <ChatBody data={props.data}/>
            </div>
            <div className="chat-input">
                <span className="textarea" role="textbox" contentEditable />
                <div className="chat-body-button" onClick={() => {classhtt.send()}}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Group_10235" data-name="Group 10235" width={40} viewBox="0 0 173.64 149.826">
                    <path id="Path_8370" data-name="Path 8370" d="M163.3,94.537,23.2,36.4A16.767,16.767,0,0,0,.529,56.035L13,104.936H74.053a5.087,5.087,0,0,1,0,10.175H13l-12.47,48.9A16.768,16.768,0,0,0,23.2,183.643l140.1-58.132a16.767,16.767,0,0,0,0-30.974Z" transform="translate(-0.001 -35.111)"/>
                </svg>
                </div>
            </div>
        </div>
    );
}

function ChatTab(props) {
    const classhtt = props.classhtt;

    const handlOff = function() {
        const ele = document.querySelector('.chat-bottom-button.lamlai .chat-bottom-button-list');
        console.log('ok')
        ele.classList.remove('on')
        document.getElementById('root').removeEventListener('click', handlOff , false)
    }

    const handlOnOff = function() {
        const ele = document.querySelector('.chat-bottom-button.lamlai .chat-bottom-button-list');
        if (ele.classList.contains('on')) {
            ele.classList.remove('on')
        }
        else {
            ele.classList.add('on')

            document.getElementById('root').addEventListener('click', handlOff)
        }
    }

    return (
        <React.Fragment>
            <div className="chat-top">
                
            </div>

            <div className="chat-content" id="slideBarContent">
                <Menu data={classhtt.slideBarTool} />
            </div>

            <div className="chat-bottom">
                <button className="chat-bottom-button lamlai" style={classhtt.isOnTap ? {} : {'display': 'none'}} onClick={() => {
                    handlOnOff()
                }}>
                    <ion-icon name="caret-up-outline"></ion-icon>

                    <div className="chat-bottom-button-list">
                        <div onClick={() => {classttn.lamBaiLai(true)}}>L??m b??i l???i</div>
                        <div onClick={() => {classttn.lamBaiLai()}}>L??m l???i b??i m???i</div>
                    </div>

                </button>

                <button className="chat-bottom-button" onClick={() => {classttn.handlNopBai()}}>
                    nopbai
                </button>
            </div>
        </React.Fragment>
    );
}

function PhongHoc(props) {
    const classhtt = props.classhtt;
    const item = classhtt.arr_Data_BaiHoc;
    return (
        <React.Fragment>
            <div className="phonghoc">
                <div className="phonghoc-row1">
                    <div className="action" id="slidebar">
                        <SideBar classhtt={classhtt} />
                    </div>

                    <div className="phonghoc-chat-conter">
                        <div className="phonghoc-chat" id="side-bar" style={ classhtt.isSideBar ? {} : { width: "0px", margin: "0", opacity: "0" }}>
                            <ChatTab classhtt={classhtt} />
                        </div>
                        <div className="phonghoc-content">
                            <div className="phonghoc-content-top">
                                <p>
                                    {item.TenMon} - {item.TenBaiHoc}
                                </p>
                            </div>

                            <div className="phonghoc-content-bottom" id="content">
                                <BaiHoc />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

function ViewFile(props) {
    return (
        <div className="div-file-view">
            <div className="div-file-iframe" id="fileiframe">
                <iframe src={props.url} frameBorder="0"></iframe>
            </div>
            
            <div className="div-file-button" style={{display: 'none'}}>
                <div className="div-file-close">
                    <ion-icon name="close-outline"></ion-icon>
                </div>
                <div className="div-file-dow">
                    <ion-icon src="./img/svg/download-347.svg"></ion-icon>
                </div>
            </div>

        </div>
    )
}

function ListViewCauHoi({data = []}) {
    return (
        <div className="list-cauhoi">
            <div className="list-cauhoi-view">
                {data.map((e , index) => {
                    return (
                        <div className="list-cauhoi-ele" key={index} onClick={() => {classttn.updateCauHoi(e.cau - 1)}}>
                            <p>{e.cau}</p>
                            <hr />
                            <p>{e.dapan}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}