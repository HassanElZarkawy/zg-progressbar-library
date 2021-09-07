import React, {Component} from 'react';
import Draggable from 'react-draggable';
import './_styles.scss';
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {connect} from 'react-redux';
import {updateProgressbarWidthAction} from "../actions";

class ZgProgressSlider extends Component {
    constructor(props) {
        super(props);
        this.progressBarRef = React.createRef();

        const offsetPos = this.calcPos(props.initPercent, this.props.progressWidth);
        const percentage = this.calcPercent(offsetPos, this.props.progressWidth);
        this.state = {
            percentage,
            offsetPos,
            offsetPercent: 0,
            userChange: 0,
            sliderImage: props.sliderImage,
            updateCallback: props.onUpdateCallback,
            secondaryOptionCallback: props.onFunc2Click,
            primaryOptionCallback: props.onFunc1Click,
            primaryIcon: props.func1Icon,
            secondaryIcon: props.func2Icon,
            isDisabled: props.isDisabled
        };
    }

    calcPos(percent, progressWidth) {
        return (percent / 100) * progressWidth;
    }

    calcPercent(pos, progressWidth) {
        const progressPercent = (pos / progressWidth) * 100;
        let roundPercent;
        roundPercent = progressPercent > 51 ? Math.ceil(progressPercent) : Math.floor(progressPercent);
        roundPercent = roundPercent > 100 ? 100 : (roundPercent < 0 ? 0 : roundPercent);
        return roundPercent;
    }

    changeProgress(ev, data) {
        const { offsetPos } = this.state;
        const { progressWidth } = this.props;
        const percentage = this.calcPercent(data.x + offsetPos, progressWidth);
        this.setState({percentage, userChange: data.x});
    }

    reEvalWithoutChange(newWidth) {
        const {percentage, userChange} = this.state;
        const newOffset = this.calcPos(percentage, newWidth);
        this.setState({
            offsetPos: newOffset - userChange,
        });
    }

    reEvalOffset(prevPercent, newPercent) {
        const { offsetPos, percentage } = this.state;
        const { progressWidth } = this.props;

        if (newPercent === percentage) {
            return; // component already aware
        }
        const change = newPercent - prevPercent;
        const newOffset = this.calcPos(change, progressWidth);
        this.setState({
            percentage: newPercent,
            offsetPos: offsetPos + newOffset,
        });
    }

    initSize() {
        const { updateProgressbarWidth } = this.props;
        updateProgressbarWidth(this.progressBarRef.current.getBoundingClientRect().width);
    }

    handleResize() {
        if (this.progressBarRef.current === null) {
            return;
        }
        if (this.handleResizeTimeout) {
            clearTimeout(this.handleResizeTimeout);
        }
        this.handleResizeTimeout = setTimeout(() => {
            const { updateProgressbarWidth } = this.props;
            updateProgressbarWidth(this.progressBarRef.current.getBoundingClientRect().width);
        }, 100);
    }

    componentDidMount() {
        window.onresize = () => this.handleResize();
        const { progressWidthInit } = this.props;
        if (!progressWidthInit) {
            this.initSize();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { initPercent, progressWidth } = this.props;
        if (prevProps.initPercent !== initPercent) {
            this.reEvalOffset(prevProps.initPercent, initPercent);
        }
        if (prevProps.progressWidth !== progressWidth) {
            this.reEvalWithoutChange(progressWidth);
        }
    }

    saveProgress(ev, draggableData) {
        const { updateCallback } = this.state;
        if (updateCallback) {
            const { offsetPos } = this.state;
            const { progressWidth } = this.props;
            const percentage = this.calcPercent(draggableData.x + offsetPos, progressWidth);
            updateCallback(percentage);
        }
    }

    render() {
        const {
            percentage,
            offsetPos,
            isDisabled,
            sliderImage,
            primaryIcon,
            secondaryIcon,
            primaryOptionCallback,
            secondaryOptionCallback
        } = this.state;

        const blockerText = percentage === 100 ? 'Completed milestones are locked' : 'Only milestone owner can transfer ownership';

        const swapIcon = !isDisabled
            ?   <div className="milestone-swap" onClick={primaryOptionCallback}>
                <img src={primaryIcon} width="25"/>
            </div>
            : <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={
                    <Tooltip id="validation-blocker-tooltip">
                        <div>
                            {blockerText}
                        </div>
                    </Tooltip>
                }
            >
                <div className="milestone-swap">
                    <img src={primaryIcon} width="25"/>
                </div>
            </OverlayTrigger>;

        const scale = 0.9 + (percentage/300);
        return <div className="progress-container">
            <div className="milestone-progress-bar" ref={this.progressBarRef} />
            <Draggable
                bounds="parent"
                axis="x"
                enableUserSelectHack="true"
                disabled={isDisabled}
                defaultClassName="milestone-user-draggable"
                onDrag={(ev, data) => this.changeProgress(ev, data)}
                onStop={(ev, data) => this.saveProgress(ev, data)}
            >
                <div className="milestone-user-img-container"
                     style={{left: offsetPos}}
                >
                    {
                        percentage === 100
                            ? <img className="completion-checkmark" src="/img/checkmark-v2.png" />
                            : null
                    }
                    <div className="milestones-extra-controls">
                        <div className="milestone-percent-indicator">{percentage}%</div>

                        { swapIcon }

                        <div className="milestone-chat" onClick={secondaryOptionCallback}>
                            <img src={secondaryIcon} width="25"/>
                        </div>
                    </div>
                    <img className="milestone-user-img" src={sliderImage} alt="" style={{transform: `scale(${scale})`}} />
                </div>
            </Draggable>
        </div>
    }
}

const mapStateToProps = state => ({
    progressWidth: state.milestones.progressWidth,
});

const mapDispatchToProps = dispatch => ({
    updateProgressbarWidth: newWidth => dispatch(updateProgressbarWidthAction(newWidth))
});

export default connect(mapStateToProps, mapDispatchToProps)(ZgProgressSlider);
// export default ZgProgressSlider;