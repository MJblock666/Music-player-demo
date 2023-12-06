//from web
// 音乐播放器
class MusicPlayer {
    constructor(
        data = {
            // 歌曲信息在这里修改
            songObjArr: [
                {
                    title: "A moment apart",  // 歌曲名
                    author: "Forza Horizon 4",   // 歌手
                    imgSrc: "https://upload.wikimedia.org/wikipedia/zh/thumb/1/12/Forza_Horizon_4.jpg/220px-Forza_Horizon_4.jpg", // 图片路径
                    url: "./audio/amp.mp3", // 音频路径
                },
                {
                    title: "Cedar Shead",
                    author: "Koloto",
                    imgSrc: "https://i1.sndcdn.com/artworks-000066873748-ibnrgq-t500x500.jpg",
                    url: "./audio/cader.mp3",
                },
                {
                    title: "Sunshine rainbow white horse",
                    author: "Big zhangwei",
                    imgSrc: "data:image/jpeg;base64,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",
                    url: "./audio/ygchxbm.mp3",
                },
            ],
            currentIndex: 0,
        }
    ) {
        // 与 _renderFrame 相关变量
        this._startTime = null;
        this._isRunTimeArr = new Array(2).fill(false);
        this._requestID = null;

        this._songObjArr = data.songObjArr;
        this.__currentIndex = data.currentIndex;
        // 用户是否进行了播放操作
        this._isUserPlay = false;

        this._mImgBoxDom = document.querySelector(".music-box");

        // 播放器单体
        this._musicPlayerEntity = new Entity();

        // 音乐图片组件
        this._musicPlayerEntity.addComp(
            new MusicImgComp({
                imgSrcArr: Array.from(this._songObjArr, (item) => item.imgSrc),
                currentImgIndex: this._currentIndex,
            })
        );

        // 音乐控制组件
        this._musicPlayerEntity.addComp(
            new MusicControlComp({
                onClickMPreviousBtn: () => {
                    this._currentIndex = this._currentIndex - 1;
                },
                onClickMPlayBtn: () => {
                    if (this._startTime === null && this._musicPlayerEntity.getComp("musicComp").isCanPlay) {
                        this._musicPlayerEntity.getComp("musicComp").isPlay = !this._musicPlayerEntity.getComp("musicComp").isPlay;
                        this._isUserPlay = this._musicPlayerEntity.getComp("musicComp").isPlay;
                    }
                },
                onClickMNextBtn: () => {
                    this._currentIndex = this._currentIndex + 1;
                },
                onClickMProgressBar: (event) => {
                    if(!this._musicPlayerEntity.getComp("musicComp").isCanPlay) {
                        return;
                    }
                    if(event.target === this._musicPlayerEntity.getComp("musicControlComp").mProgressBtnDom){
                        return;
                    }
                    const time = this._getXTime(event.offsetX);
                    this._musicPlayerEntity.getComp("musicControlComp").currentTime = time;
                    this._musicPlayerEntity.getComp("musicComp").currentTime = time;
                },
                onMousedownMProgressBtn: (event) => {
                    if(!this._musicPlayerEntity.getComp("musicComp").isCanPlay) {
                        return;
                    }
                    this._musicPlayerEntity.getComp("musicControlComp").isSetProgressBar = true;
                    const x = event.clientX;
                    let time = this._musicPlayerEntity.getComp("musicComp").currentTime;
                    const px = this._getTimeX(time);
                    let currentX = 0;

                    // 鼠标移动事件回调
                    const onMImgBoxMousemove = (event) => {
                        const bx = event.clientX;
                        const betweenNum = bx - x;
                        currentX = px + betweenNum;
                        if(currentX < 0) {
                            currentX = 0;
                        } else if (currentX > this._musicPlayerEntity.getComp("musicControlComp").totalProgressW){
                            currentX = this._musicPlayerEntity.getComp("musicControlComp").totalProgressW;
                        }
                        time = this._getXTime(currentX);
                        this._musicPlayerEntity.getComp("musicControlComp").currentTime = time;
                    }
                    this._mImgBoxDom.addEventListener("mousemove", onMImgBoxMousemove);

                    // 操作完成回调
                    const removeCB = () => {
                        this._mImgBoxDom.removeEventListener("mousemove", onMImgBoxMousemove);
                        this._mImgBoxDom.removeEventListener("mouseup", removeCB);
                        this._mImgBoxDom.removeEventListener("mouseleave", removeCB);
                        this._musicPlayerEntity.getComp("musicComp").currentTime = time;
                        this._musicPlayerEntity.getComp("musicControlComp").isSetProgressBar = false;
                    }

                    this._mImgBoxDom.addEventListener("mouseup", removeCB);
                    this._mImgBoxDom.addEventListener("mouseleave", removeCB);
                }
            })
        );

        // 音乐描述组件
        this._musicPlayerEntity.addComp(
            new MusicDescComp({
                mDescArr: Array.from(this._songObjArr, item => {
                    return { title: item.title, author: item.author }
                }),
                currentDescIndex: this._currentIndex
            })
        )

        // 音乐组件
        this._musicPlayerEntity.addComp(
            new MusicComp({
                mUrlArr: Array.from(this._songObjArr, item => item.url),
                currentUrlIndex: this._currentIndex,
                onCanplay: () => {
                    this._musicPlayerEntity.getComp("musicComp").isCanPlay = true;
                    this._musicPlayerEntity.getComp("musicControlComp").totalTime = this._musicPlayerEntity.getComp("musicComp").totalTime;

                    if(this._isUserPlay) {
                        this._musicPlayerEntity.getComp("musicComp").isPlay = true;
                    }
                },
                onPlay: () => {
                    this._musicPlayerEntity.getComp("musicControlComp").isPlay = true;
                },
                onPause: () => {
                    this._musicPlayerEntity.getComp("musicControlComp").isPlay = false;
                },
                onEnded: () => {
                    this._currentIndex = this._currentIndex + 1;
                },
                onTimeupdate: () => {
                    if(this._musicPlayerEntity.getComp("musicControlComp").isSetProgressBar) {
                        return;
                    }
                    this._musicPlayerEntity.getComp("musicControlComp").currentTime = this._musicPlayerEntity.getComp("musicComp").currentTime;
                    this._musicPlayerEntity.getComp("musicControlComp").loadTime = this._musicPlayerEntity.getComp("musicComp").loadTime;
                }
            })
        )
    }

    set _currentIndex(value) {
        if (this._startTime === null) {
            this._musicPlayerEntity.getComp("musicComp").isPlay = false;
            this._musicPlayerEntity.getComp("musicComp").isCanPlay = false;
            this._musicPlayerEntity.getComp("musicImgComp").isAnim = true;
            this._musicPlayerEntity.getComp("musicImgComp").switchDir = value - this._currentIndex;
            this._musicPlayerEntity.getComp("musicDescComp").isAnim = true;
            this._musicPlayerEntity.getComp("musicDescComp").switchDir = value - this._currentIndex;
            this._requestID = requestAnimationFrame(this._renderFrame.bind(this));
            let v =
                value < 0
                    ? this._songObjArr.length - 1
                    : value >= this._songObjArr.length
                        ? 0
                        : value;
            this.__currentIndex = v;
        }
    }

    get _currentIndex() {
        return this.__currentIndex;
    }

    // 根据相对于进度条的 x 坐标求出时间
    _getXTime(value) {
        return Math.floor(value * this._musicPlayerEntity.getComp("musicComp").totalTime / this._musicPlayerEntity.getComp("musicControlComp").totalProgressW);
    }

    // 根据时间求出相对于进度条的 x 坐标
    _getTimeX(time) {
        return time * this._musicPlayerEntity.getComp("musicControlComp").totalProgressW / this._musicPlayerEntity.getComp("musicComp").totalTime;
    }

    _renderFrame(timestamp) {
        this._requestID = requestAnimationFrame(this._renderFrame.bind(this));

        if (this._startTime === null) {
            this._startTime = timestamp;
        }

        if (timestamp >= this._startTime + 1000) {
            // 图片动画结束
            this._musicPlayerEntity.getComp("musicImgComp").isAnim = false;
            this._musicPlayerEntity.getComp("musicImgComp").currentImgIndex = this._currentIndex;

            // 描述动画结束
            this._musicPlayerEntity.getComp("musicDescComp").isAnim = false;

            // 结束更新
            cancelAnimationFrame(this._requestID);
            this._isRunTimeArr = this._isRunTimeArr.fill(false);
            this._startTime = null;
            return;
        }

        if (timestamp >= this._startTime + 500 && !this._isRunTimeArr[1]) {
            this._isRunTimeArr[1] = true;
            this._musicPlayerEntity.getComp("musicDescComp").currentDescIndex = this._currentIndex;

            // 切换音乐
            this._musicPlayerEntity.getComp("musicComp").currentUrlIndex = this._currentIndex;
        }
    }
}

// 单体
class Entity {
    constructor() {
        this._compMap = new Map();
    }

    addComp(comp) {
        this._compMap.set(comp.name, comp);
    }

    getComp(compName) {
        return this._compMap.get(compName);
    }
}

// 音乐图片
class MusicImgComp {
    constructor(data) {
        this.name = "musicImgComp";
        this._imgSrcArr = data.imgSrcArr;
        this._currentImgIndex = data.currentImgIndex;
        this._mImgContentDom = document.querySelector(".m-img-content");

        // 新建图片节点
        this._mImgDomArr = Array.from(
            new Array(this._imgSrcArr.length + 2),
            (item, index) => {
                const dom = document.createElement("img");
                switch (index) {
                    case 0:
                        dom.src = this._imgSrcArr[this._imgSrcArr.length - 1];
                        break;
                    case this._imgSrcArr.length + 1:
                        dom.src = this._imgSrcArr[0];
                        break;
                    default:
                        dom.src = this._imgSrcArr[index - 1];
                        break;
                }
                return dom;
            }
        );
        this._mImgContentDom.append(...this._mImgDomArr);

        this._switchDir = 1;
        this._isAnim = false;
        this.currentImgIndex = this._currentImgIndex;
    }

    set switchDir(value) {
        this._mImgContentDom.style.transform = `translateY(${-100 * (this._currentImgIndex + value + 1)
            }%)`;
        this._switchDir = value;
    }

    set currentImgIndex(value) {
        this._mImgContentDom.style.transform = `translateY(${-100 * (value + 1)}%)`;
        this._currentImgIndex = value;
    }

    set isAnim(value) {
        if (value) {
            this._mImgDomArr.forEach((item) => {
                item.classList.add("anim");
            });
            this._mImgContentDom.classList.add("tran");
        } else {
            this._mImgDomArr.forEach((item) => {
                item.classList.remove("anim");
            });
            this._mImgContentDom.classList.remove("tran");
        }
        this._isAnim = value;
    }
}

// 音乐控制
class MusicControlComp {
    constructor(data) {
        this.name = "musicControlComp";
        this._mPreviousBtnDom = document.querySelector(".m-previous-btn");
        this._mPlayBtnDom = document.querySelector(".m-play-btn");
        this._mNextBtnDom = document.querySelector(".m-next-btn");
        this._mPlayBtnSvgDom = document.querySelector(".m-play-btn svg");
        this._mProgressBarDom = document.querySelector(".m-progress-bar");
        this._mTotalTimeDom = document.querySelector(".m-total-time");
        this._mCurrentTimeDom = document.querySelector(".m-current-time");
        this._mProgressMainDom = document.querySelector(".m-progress-main");
        this.mProgressBtnDom = document.querySelector(".m-progress-btn");
        this._mProgressLoadDom = document.querySelector(".m-progress-load");

        this._isPlay = false;
        this._totalTime = 0;
        // 是否在设置进度条
        this.isSetProgressBar = false;
        this.totalProgressW = this._mProgressBarDom.clientWidth;

        this._mPreviousBtnDom.addEventListener("click", data.onClickMPreviousBtn);
        this._mPlayBtnDom.addEventListener("click", data.onClickMPlayBtn);
        this._mNextBtnDom.addEventListener("click", data.onClickMNextBtn);
        // 音乐进度条点击事件
        this._mProgressBarDom.addEventListener("click", data.onClickMProgressBar);
        this.mProgressBtnDom.addEventListener("mousedown", data.onMousedownMProgressBtn);

        this.currentTime = 0;
        this.loadTime = 0;
    }

    set isPlay(value) {
        if(value) {
            this._mPlayBtnSvgDom.innerHTML = `<use href = "#icon-24gf-pause2"></use>`;
        } else {
            this._mPlayBtnSvgDom.innerHTML = `<use href = "#icon-bofang"></use>`;
        }
        this._isPlay = value;
    }

    get isPlay() {
        return this._isPlay;
    }

    set totalTime(value) {
        this._mTotalTimeDom.textContent = this._getTimeDateStr(value);
        this._totalTime = value;
    }

    set currentTime(value) {
        if (this._totalTime === 0) {
            this._mProgressMainDom.style.width = "0%";
        }
        this._mProgressMainDom.style.width = `${value * 100 / this._totalTime}%`;
        this._mCurrentTimeDom.textContent = this._getTimeDateStr(value);
    }

    set loadTime(value) {
        if (this._totalTime === 0) {
            this._mProgressLoadDom.style.width = "0%";
        }
        this._mProgressLoadDom.style.width = `${value * 100 / this._totalTime}%`;
    }

    // 返回时间格式的字符串
    _getTimeDateStr(time) {
        if(!time) {
            return "00 : 00";
        }
        const minute = parseInt(time / 60);
        const second = time % 60;
        return `${minute < 10 ? "0" + minute : "" + minute} : ${second < 10 ? "0" + second : "" + second}`;
    }
}

// 音乐描述
class MusicDescComp {
    constructor(data) {
        this.name = "musicDescComp";
        this._mDescArr = data.mDescArr;
        this._currentDescIndex = data.currentDescIndex;
        this._mDescArticleDom = document.querySelector(".m-description-content>article");
        this._mTitleDom = document.querySelector(".m-title");
        this._mAuthorDom = document.querySelector(".m-author");

        this._switchDir = 1;
        this._isAnim = false;
        this.currentDescIndex = this._currentDescIndex;
    }

    set switchDir(value) {
        this._mDescArticleDom.style.setProperty("--transform-translateY", `translateY(${value * -20}%)`);
        this._switchDir = value;
    }

    set currentDescIndex(value) {
        this._mTitleDom.textContent = this._mDescArr[value].title;
        this._mAuthorDom.textContent = this._mDescArr[value].author;
        this._currentDescIndex = value;
    }

    set isAnim(value) {
        if (value) {
            this._mDescArticleDom.classList.add("anim");
        } else {
            this._mDescArticleDom.classList.remove("anim");
        }
        this._isAnim = value;
    }
}

// 音乐
class MusicComp {
    constructor(data) {
        this.name = "musicComp";
        this._mUrlArr = data.mUrlArr;
        this._currentUrlIndex = data.currentUrlIndex;
        this._audioDom = document.createElement("audio");

        this._isPlay = false;
        this._isCanPlay = false;

        this._audioDom.addEventListener("canplay", data.onCanplay);
        this._audioDom.addEventListener("play", data.onPlay);
        this._audioDom.addEventListener("pause", data.onPause);
        this._audioDom.addEventListener("ended", data.onEnded);
        this._audioDom.addEventListener("timeupdate", data.onTimeupdate);

        this.currentUrlIndex = this._currentUrlIndex;
    }

    set currentUrlIndex(value) {
        this._audioDom.src = this._mUrlArr[value];
        this._currentUrlIndex = value;
    }

    set isPlay(value) {
        if (value) {
            this._audioDom.play();
        } else {
            this._audioDom.pause();
        }
        this._isPlay = value;
    }

    get isPlay() {
        return this._isPlay;
    }

    // 音乐总的时间
    get totalTime() {
        return Math.floor(this._audioDom.duration);
    }

    set currentTime(value) {
        this._audioDom.currentTime = value;
    }

    get currentTime() {
        return Math.floor(this._audioDom.currentTime);
    }

    get loadTime() {
        const timeRanges = this._audioDom.buffered;
        let time = 0;
        if (timeRanges.length === 0) {
            time = 0;
        } else {
            time = Math.floor(timeRanges.end(timeRanges.length - 1));
        }
        return time;
    }

    set isCanPlay(value) {
        this._isCanPlay = value;
    }

    get isCanPlay() {
        return this._isCanPlay;
    }
}


new MusicPlayer();