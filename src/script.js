import {db} from './firebase/config.js'
import { collection, addDoc } from 'firebase/firestore';

const ele= {
    'model': 'Miscellaneous',
    'numberPlate': "0000",
    'vehicle': 'EV 2 Wheeler'
}

for(let i=0 ; i<11; i++){
    const docRef = await addDoc(collection(db, "EV"), ele);
}

  