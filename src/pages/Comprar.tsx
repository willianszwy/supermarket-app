import React from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
    IonFooter,
    IonImg

} from '@ionic/react';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../services/State';

const Comprar: React.FC = () => {
    const { state } = React.useContext(AppContext);
    const history = useHistory();
    const openScanner = () => {
        BarcodeScanner.scan(
            {
                showTorchButton: true,
                orientation: "landscape",
                disableSuccessBeep: false
            }

        ).then(data => {
            if (data.cancelled) return;
            if (state.products.some((produto: { codigo: string; }) => {
                return produto.codigo === data.text;
            })) {
                history.push(`/adicionar/${data.text}`);
            }
            else {
                history.push(`/cadastrar/${data.text}`);
            }
        })

    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Comprar</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Comprar</IonTitle>
                    </IonToolbar>
                </IonHeader>


                <IonImg src="assets/barcode.png" />


            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonButton onClick={openScanner} size="large" expand="full">

                        Ler Código de Barras</IonButton>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Comprar; 
