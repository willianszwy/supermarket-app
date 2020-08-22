import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// import './Tab1.css';

const Comprar: React.FC = () => {
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
                <h1>Comprar</h1>
            </IonContent>
        </IonPage>
    );
};

export default Comprar;
