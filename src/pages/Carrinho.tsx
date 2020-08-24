import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonFooter,
    IonText,
    IonListHeader,
    IonItemSliding,
    IonItemOptions,
    IonItemOption
} from '@ionic/react';
import FinalizarFooter from '../components/FinalizarFooter';

import { AppContext } from '../services/State';

const Carrinho: React.FC = () => {
    const { state, dispatch } = React.useContext(AppContext);


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Meu Carrinho</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Carrinho</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList>
                    <IonListHeader lines="full" >
                        <IonLabel className="ion-text-start" >Qtd</IonLabel>
                        <IonLabel>Produto</IonLabel>
                        <IonLabel className="ion-text-center">Valor</IonLabel>
                    </IonListHeader>



                    {state.chart.map((produto, index) => {

                        return (

                            <IonItemSliding key={index}>
                                <IonItemOptions side="start">
                                    <IonItemOption
                                        onClick={() => {
                                            document.querySelector("ion-item-sliding").closeOpened();
                                            dispatch({
                                                type: "removeChart",
                                                index: index
                                            });
                                        }}
                                        color="danger" expandable>
                                        Remover
                            </IonItemOption>
                                </IonItemOptions>
                                <IonItemOptions side="end">
                                    <IonItemOption
                                        onClick={() => {
                                            document.querySelector("ion-item-sliding").closeOpened();
                                            dispatch({
                                                type: "removeChart",
                                                index: index
                                            })
                                        }}
                                        color="danger" expandable>
                                        Remover
                            </IonItemOption>
                                </IonItemOptions>
                                <IonItem lines="full">
                                    <IonText slot="start">
                                        {produto.quantidade}
                                    </IonText>

                                    <IonLabel >
                                        <h2>{produto.produto.toUpperCase()}</h2>
                                        <IonNote>unidade: {Number(produto.valor).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}</IonNote>
                                    </IonLabel>
                                    <IonText slot="end" color="success">
                                        {(produto.quantidade * produto.valor).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </IonText>
                                </IonItem>
                            </IonItemSliding>
                        )
                    })}

                </IonList>


            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <FinalizarFooter></FinalizarFooter>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Carrinho;
