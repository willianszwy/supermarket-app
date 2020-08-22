import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// import './Tab1.css';

const Carrinho: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Carrinho</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Carrinho</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <h1>Carrinho</h1>
            </IonContent>
        </IonPage>
    );
};

export default Carrinho;
