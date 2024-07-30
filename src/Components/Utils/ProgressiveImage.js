import React, { Component } from 'react'

class ProgressiveImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentImage: this.props.preview,
            Loading: true,
        }
    }
    componentDidMount() {
        this.fetchImage(this.props.image)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.image !== this.props.image) {
            this.setState({ currentImage: nextProps.preview, Loading: true }, () => {
                this.fetchImage(nextProps.image)
            })
        }
    }

    componentWillUnmount() {
        if (this.LoadingImage) {
            this.LoadingImage.onload = null
        }
    }
    fetchImage = src => {
        const image = new Image()
        image.onload = () => this.setState({ currentImage: this.LoadingImage.src, Loading: false })
        image.src = src
        this.LoadingImage = image
    }

    style = Loading => {
        return {
            transition: '0.5s filter linear',
            filter: `${Loading ? 'blur(1.25em)' : ''}`,
            width: this.props.width || '100%',
            height: this.props.height || '100%',
            padding: `${Loading ? '1.25em' : ''}`,
            borderRadius: this.props.borderRadius || 0,
        }
    }
    render() {
        const { currentImage, Loading } = this.state
        const { alt } = this.props
        return <img style={this.style(Loading)} src={currentImage} alt={alt} />
    }
}

export default ProgressiveImage