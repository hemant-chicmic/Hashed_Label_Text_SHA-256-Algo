import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

import Hashes from 'jshashes';


@ccclass('getLabelHashed')
export class getLabelHashed extends Component {

    
    @property( {type : Label} )
    labelText : Label | null= null ;

    @property( {type : Label} )
    hashCode : Label | null= null ;

    start() {

    }

    update(deltaTime: number) {
        
    }

    onClickButton()
    {
        console.log( "button clicked " ) ;
        let originalText = this.labelText?.string || '' ;
        let hashedText = new Hashes.SHA256().hex(originalText); 
        console.log("Hashed text:", hashedText);
        this.hashCode.string = hashedText;
    }
}

