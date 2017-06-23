import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import SketchView from 'react-native-sketch-view';

import { ImageStore } from 'react-native'

const sketchViewConstants = SketchView.constants;

const tools = {};

tools[sketchViewConstants.toolType.pen.id] = {
    id: sketchViewConstants.toolType.pen.id,
    name: sketchViewConstants.toolType.pen.name,
    nextId: sketchViewConstants.toolType.eraser.id
};
tools[sketchViewConstants.toolType.eraser.id] = {
    id: sketchViewConstants.toolType.eraser.id,
    name: sketchViewConstants.toolType.eraser.name,
    nextId: sketchViewConstants.toolType.pen.id
};

class HandNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toolSelected: sketchViewConstants.toolType.pen.id
        };
    }

    isEraserToolSelected() {
        return this.state.toolSelected === sketchViewConstants.toolType.eraser.id;
    }

    toolChangeClick() {
        this.setState({ toolSelected: tools[this.state.toolSelected].nextId });
    }

    getToolName() {
        return tools[this.state.toolSelected].name;
    }

    onSketchSave(saveEvent) {
        if (this.props.onSave) {
            this.props.Save(saveEvent)
        }

        const temp = 'file://' + saveEvent.localFilePath;
        console.log("temp = " + temp);

        ImageStore.getBase64ForTag(temp, (base64Data) => {
            // base64Data contains the base64string of the image
            this.setState({ picture_base: `data:image/png;base64,${base64Data}` })
            this.props.setImage(base64Data, this.props.id); // ainda funciona
        }, (reason) => console.error(reason));



    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <SketchView style={{ flex: 1, backgroundColor: 'white' }} ref="sketchRef"
                    selectedTool={this.state.toolSelected}
                    onSaveSketch={this.onSketchSave.bind(this)}
                    localSourceImagePath={this.props.localSourceImagePath} />

                <View style={{ flexDirection: 'row', backgroundColor: '#ffd451' }}>
                    <TouchableHighlight underlayColor={"#CCC"} style={{ flex: 1, alignItems: 'center', paddingVertical: 20 }} onPress={() => { this.refs.sketchRef.clearSketch() }}>
                        <Text style={{ color: 'black', fontWeight: '600' }}>Limpar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"#CCC"} style={{ flex: 1, alignItems: 'center', paddingVertical: 20, borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#DDD' }} onPress={() => { this.refs.sketchRef.saveSketch() }}>
                        <Text style={{ color: 'black', fontWeight: '600' }}>Salvar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"#CCC"} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: this.isEraserToolSelected() ? "#CCC" : "rgba(0,0,0,0)" }} onPress={this.toolChangeClick.bind(this)}>
                        <Text style={{ color: 'black', fontWeight: '600' }}>Borracha</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default HandNote;