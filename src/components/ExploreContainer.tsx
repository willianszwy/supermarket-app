import React, { useState } from 'react';
import './ExploreContainer.css';
import { IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonButton, IonAlert } from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const openScanner = async () => {
    const data = await BarcodeScanner.scan(
      {
        showTorchButton: true,
        orientation: "landscape",
        disableSuccessBeep: false
      }

    );
    setTexto(data.text);
    setShowAlert(true);



  };

  const [showAlert, setShowAlert] = useState(false);
  const [texto, setTexto] = useState("");

  return (
    <div>
      <IonButton onClick={openScanner} expand="block" >Adicionar Produto</IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Alerta'}
        subHeader={'Subtitle'}
        message={texto}
        buttons={['OK']} />
      <IonList>
        <IonItem>
          <IonCheckbox slot="start" />
          <IonLabel>
            <h2>Create Idea</h2>
            <IonNote>Teste</IonNote>
          </IonLabel>
          <IonBadge color="success" slot="end">
            5 Days
          </IonBadge>
        </IonItem>
      </IonList>
    </div>
  );
};

export default ExploreContainer;
